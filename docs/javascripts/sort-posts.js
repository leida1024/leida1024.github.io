(() => {
  const initializePostSorting = () => {
    const control = document.querySelector("[data-post-sort]");
    if (!control || control.dataset.initialized === "true") return;

    const firstPost = document.querySelector(".md-post--excerpt");
    if (!firstPost) return;

    const container = firstPost.parentElement;
    const number = (post, attribute) => Date.parse(post.dataset[attribute]) || 0;
    const title = post => post.dataset.postTitle || "";

    const comparators = {
      "created-desc": (a, b) => number(b, "postCreated") - number(a, "postCreated"),
      "updated-desc": (a, b) => number(b, "postUpdated") - number(a, "postUpdated"),
      "created-asc": (a, b) => number(a, "postCreated") - number(b, "postCreated"),
      "title-asc": (a, b) => title(a).localeCompare(title(b), "zh-CN", {
        numeric: true,
        sensitivity: "base"
      })
    };

    const sort = () => {
      const posts = Array.from(container.querySelectorAll(":scope > .md-post--excerpt"));
      posts.sort(comparators[control.value] || comparators["created-desc"]);
      posts.forEach(post => container.appendChild(post));
    };

    control.dataset.initialized = "true";
    control.addEventListener("change", sort);
    sort();
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializePostSorting);
  } else {
    document.addEventListener("DOMContentLoaded", initializePostSorting);
  }
})();
