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
      "created-desc": (a, b) => number(b, "postCreated") - number(a, "postCreated"),
      "updated-desc": (a, b) => number(b, "postUpdated") - number(a, "postUpdated"),
      "created-asc": (a, b) => number(a, "postCreated") - number(b, "postCreated"),
      "title-asc": (a, b) => collator.compare(title(a), title(b))
    };

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
      const comparator = comparators[sortControl.value] || comparators["created-desc"];
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
