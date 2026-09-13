"""Adjust generated blog sections without changing category or article URLs."""

from mkdocs.plugins import event_priority


def _page(files, path):
    file = files.get_file_from_path(path)
    return file.page if file else None


def _flatten(items):
    for item in items:
        if item.is_page:
            yield item
        elif item.children:
            yield from _flatten(item.children)


@event_priority(-100)
def on_nav(nav, *, config, files):
    desired = {"主页": 0, "专题": 1, "分类": 2, "时间线": 3}
    selected = {}
    remaining = []

    for item in nav.items:
        title = "主页" if getattr(item, "is_homepage", False) else getattr(item, "title", None)
        if title in desired and title not in selected:
            selected[title] = item
        else:
            remaining.append(item)

    for title, path in (("分类", "category/index.md"), ("时间线", "timeline/index.md")):
        section = selected.get(title)
        index = _page(files, path)
        if section and index and index not in section.children:
            section.children.insert(0, index)
            index.parent = section

    ordered = [selected[title] for title in sorted(selected, key=desired.get)]
    nav.items = ordered + remaining
    nav.pages = list(_flatten(nav.items))
    return nav


def on_page_context(context, *, page, config, nav):
    is_category = page.url.startswith("category/")
    is_timeline_archive = page.url.startswith("timeline/") and page.url != "timeline/"
    if is_category or is_timeline_archive:
        hidden = set(page.meta.get("hide", []))
        hidden.update(("navigation", "toc"))
        page.meta["hide"] = sorted(hidden)

    section = next((item for item in nav.items if item.title == "分类"), None)
    categories = [
        item for item in (section.children if section else [])
        if item.url and item.url != "category/"
    ]
    context["site_categories"] = categories

    posts_by_url = {}
    for category in categories:
        for post in category.posts:
            posts_by_url[post.url] = post

    years = {}
    posts = sorted(
        posts_by_url.values(),
        key=lambda post: post.meta["published_at"],
        reverse=True,
    )
    for post in posts:
        published = post.meta["published_at"]
        months = years.setdefault(published.year, {})
        months.setdefault(published.month, []).append(post)

    context["timeline_years"] = [
        {
            "year": year,
            "url": f"timeline/{year}/",
            "count": sum(len(posts) for posts in months.values()),
            "months": [
                {"month": month, "posts": month_posts}
                for month, month_posts in sorted(months.items(), reverse=True)
            ],
        }
        for year, months in sorted(years.items(), reverse=True)
    ]
    return context
