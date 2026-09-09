(() => {
  const origin = "https://giscus.app";

  const getTheme = () =>
    document.body.dataset.mdColorScheme === "slate" ? "transparent_dark" : "light";

  const updateTheme = () => {
    const frame = document.querySelector("[data-giscus-comments] .giscus-frame");
    if (!frame?.contentWindow) return;

    frame.contentWindow.postMessage({
      giscus: {
        setConfig: {
          theme: getTheme()
        }
      }
    }, origin);
  };

  const initializeComments = () => {
    const comments = document.querySelector("[data-giscus-comments]");
    if (!comments || comments.dataset.initialized === "true") return;

    const mount = comments.querySelector("[data-giscus-mount]");
    const script = document.createElement("script");
    const attributes = {
      src: `${origin}/client.js`,
      "data-repo": "leida1024/leida1024.github.io",
      "data-repo-id": "R_kgDOG0009Q",
      "data-category": "Announcements",
      "data-category-id": "DIC_kwDOG0009c4DFPUq",
      "data-mapping": "pathname",
      "data-strict": "1",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "top",
      "data-theme": getTheme(),
      "data-lang": "zh-CN",
      "data-loading": "lazy",
      crossorigin: "anonymous"
    };

    Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
    script.async = true;
    comments.dataset.initialized = "true";
    mount.appendChild(script);
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeComments);
  } else {
    document.addEventListener("DOMContentLoaded", initializeComments);
  }

  new MutationObserver(updateTheme).observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"]
  });
})();
