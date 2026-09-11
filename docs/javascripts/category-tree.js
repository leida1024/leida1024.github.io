(() => {
  const initializeCategoryControls = () => {
    document.querySelectorAll("[data-category-controls]").forEach(controls => {
      if (controls.dataset.initialized === "true") return;

      const tree = controls.closest("[data-category-tree]");
      if (!tree) return;

      const setExpanded = expanded => {
        tree.querySelectorAll("details[data-category-branch]").forEach(branch => {
          branch.open = expanded;
        });
      };

      controls.querySelector("[data-category-expand]")?.addEventListener("click", () => {
        setExpanded(true);
      });
      controls.querySelector("[data-category-collapse]")?.addEventListener("click", () => {
        setExpanded(false);
      });
      controls.dataset.initialized = "true";
    });
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeCategoryControls);
  } else {
    document.addEventListener("DOMContentLoaded", initializeCategoryControls);
  }
})();
