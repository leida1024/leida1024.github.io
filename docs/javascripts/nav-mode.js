(() => {
  const key = "leida-nav-mode";

  const initializeNavMode = () => {
    const toggle = document.querySelector("[data-nav-mode-toggle]");
    if (!toggle || toggle.dataset.initialized === "true") return;

    const apply = mode => {
      const isFixed = mode !== "auto";
      document.body.dataset.navMode = isFixed ? "fixed" : "auto";
      toggle.setAttribute("aria-pressed", String(isFixed));
      toggle.title = isFixed ? "固定导航栏" : "导航栏随滚动收缩";
      toggle.querySelector(".md-header__button-label").textContent = isFixed ? "固定导航栏" : "自动收缩导航栏";
      toggle.querySelector("svg").outerHTML = isFixed
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 9V4h1V2H7v2h1v5c0 1.66-1.34 3-3 3v2h6v6l1 1 1-1v-6h6v-2c-1.66 0-3-1.34-3-3Zm-5 3H8.46A5 5 0 0 0 10 9V4h4v5a5 5 0 0 0 1.54 3H11Z"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m17.59 3-1.41 1.41 1.59 1.59-2.54 2.54A6 6 0 0 0 12 7.54V4h2V2H8v2h2v3.54a6 6 0 0 0-3.23 1L4.24 6 5.83 4.41 4.41 3l-3 3 1.41 1.41L4.41 6l2.54 2.54A6 6 0 0 0 9 12.46V16H7v2h10v-2h-2v-3.54a6 6 0 0 0 2.23-1L19.76 14 18.17 15.59 19.59 17l3-3-1.41-1.41L19.59 14l-2.54-2.54A6 6 0 0 0 15 8.46V5.41L17.59 8 19 6.59 17.59 5.17 19 3.76Z"/></svg>';
    };

    apply(localStorage.getItem(key) || "auto");
    let lastScrollY = window.scrollY;
    const header = document.querySelector("[data-md-component=header]");
    const updateVisibility = () => {
      if (document.body.dataset.navMode !== "auto" || !header) return;
      const current = window.scrollY;
      const shouldHide = current > 96 && current > lastScrollY + 4;
      const shouldShow = current < lastScrollY - 4 || current <= 24;
      if (shouldHide) header.dataset.navHidden = "true";
      else if (shouldShow) header.dataset.navHidden = "false";
      lastScrollY = current;
    };
    window.addEventListener("scroll", updateVisibility, { passive: true });
    toggle.addEventListener("click", () => {
      const mode = document.body.dataset.navMode === "fixed" ? "auto" : "fixed";
      localStorage.setItem(key, mode);
      apply(mode);
      if (mode === "fixed" && header) header.dataset.navHidden = "false";
    });
    toggle.dataset.initialized = "true";
  };

  if (typeof document$ !== "undefined") document$.subscribe(initializeNavMode);
  else document.addEventListener("DOMContentLoaded", initializeNavMode);
})();
