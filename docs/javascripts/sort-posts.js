(() => {
  const initializePostSorting = () => {
    const sortControl = document.querySelector("[data-post-sort]");
    const categoryControl = document.querySelector("[data-post-category]");
    if (!sortControl || !categoryControl || sortControl.dataset.initialized === "true") return;

    const firstPost = document.querySelector(".md-post--excerpt");
    if (!firstPost) return;

    const container = firstPost.parentElement;
    const posts = Array.from(container.querySelectorAll(":scope > .md-post--excerpt"));
    const count = document.querySelector("[data-post-count]");
    const empty = document.querySelector("[data-post-empty]");
    const number = (post, attribute) => Date.parse(post.dataset[attribute]) || 0;
    const title = post => post.dataset.postTitle || "";
    const categories = post => (post.dataset.postCategories || "")
      .split("|")
      .filter(Boolean);
    const collator = new Intl.Collator("zh-CN", {
      numeric: true,
      sensitivity: "base"
    });

    const comparators = {
      "published-desc": (a, b) => number(b, "postPublished") - number(a, "postPublished"),
      "updated-desc": (a, b) => number(b, "postUpdated") - number(a, "postUpdated"),
      "published-asc": (a, b) => number(a, "postPublished") - number(b, "postPublished"),
      "updated-asc": (a, b) => number(a, "postUpdated") - number(b, "postUpdated"),
      "title-asc": (a, b) => collator.compare(title(a), title(b)),
      "title-desc": (a, b) => collator.compare(title(b), title(a))
    };

    const selectedSort = () => sortControl.querySelector("input:checked")?.value || "published-desc";

    const categoryCounts = new Map();
    posts.forEach(post => {
      categories(post).forEach(category => {
        categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
      });
    });

    Array.from(categoryCounts)
      .sort(([a], [b]) => collator.compare(a, b))
      .forEach(([category, total]) => {
        categoryControl.add(new Option(`${category} (${total})`, category));
      });

    const update = () => {
      const selectedCategory = categoryControl.value;
      const comparator = comparators[selectedSort()] || comparators["published-desc"];
      let visible = 0;

      posts.sort(comparator);
      posts.forEach(post => {
        post.hidden = Boolean(selectedCategory) && !categories(post).includes(selectedCategory);
        if (!post.hidden) visible += 1;
      });
      posts.forEach(post => container.appendChild(post));

      if (count) count.textContent = selectedCategory ? `${visible} 篇` : `共 ${visible} 篇`;
      if (empty) empty.hidden = visible !== 0;
    };

    sortControl.dataset.initialized = "true";
    sortControl.addEventListener("change", update);
    categoryControl.addEventListener("change", update);
    update();
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializePostSorting);
  } else {
    document.addEventListener("DOMContentLoaded", initializePostSorting);
  }
})();
