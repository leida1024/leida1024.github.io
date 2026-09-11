(() => {
  const initializeTimelineControls = () => {
    document.querySelectorAll("[data-timeline-controls]").forEach(controls => {
      if (controls.dataset.initialized === "true") return;

      const tree = controls.nextElementSibling;
      if (!tree?.matches("[data-timeline-tree]")) return;

      const setExpanded = expanded => {
        tree.querySelectorAll("details").forEach(branch => {
          branch.open = expanded;
        });
      };

      controls.querySelector("[data-timeline-expand]")?.addEventListener("click", () => {
        setExpanded(true);
      });
      controls.querySelector("[data-timeline-collapse]")?.addEventListener("click", () => {
        setExpanded(false);
      });
      controls.dataset.initialized = "true";
    });
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeTimelineControls);
  } else {
    document.addEventListener("DOMContentLoaded", initializeTimelineControls);
  }
})();
