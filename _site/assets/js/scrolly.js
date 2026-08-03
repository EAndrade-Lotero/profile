(function () {
  function initScrolly(root) {
    var steps = Array.prototype.slice.call(root.querySelectorAll(".scrolly-step"));
    var images = Array.prototype.slice.call(root.querySelectorAll(".scrolly-figure img"));
    if (!steps.length || !images.length) return;

    function activate(index) {
      steps.forEach(function (step, i) {
        step.classList.toggle("is-active", i === index);
      });
      images.forEach(function (img) {
        var stepIndex = Number(img.getAttribute("data-step"));
        img.classList.toggle("is-active", stepIndex === index);
      });
    }

    activate(0);

    if (!("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) {
            return entry.isIntersecting;
          })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          });

        if (!visible.length) return;

        var index = Number(visible[0].target.getAttribute("data-step"));
        if (!Number.isNaN(index)) activate(index);
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    steps.forEach(function (step) {
      observer.observe(step);
    });
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll(".scrolly"), initScrolly);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
