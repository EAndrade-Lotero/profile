(function () {
  function initScrolly(root) {
    var steps = Array.prototype.slice.call(root.querySelectorAll(".scrolly-step"));
    var images = Array.prototype.slice.call(root.querySelectorAll(".scrolly-figure img"));
    if (!steps.length || !images.length) return;

    var current = -1;

    function activate(index) {
      if (index === current) return;
      current = index;
      steps.forEach(function (step, i) {
        step.classList.toggle("is-active", i === index);
      });
      images.forEach(function (img) {
        var stepIndex = Number(img.getAttribute("data-step"));
        img.classList.toggle("is-active", stepIndex === index);
      });
    }

    // The active step is the last one whose top edge has scrolled past the
    // middle of the screen; the first step is the default. This works in both
    // directions, so scrolling back up always returns to earlier steps. An
    // IntersectionObserver with a fixed band could not reselect the first step
    // once it had scrolled above that band.
    function update() {
      var mid = window.innerHeight * 0.5;
      var best = 0;
      steps.forEach(function (step, i) {
        if (step.getBoundingClientRect().top <= mid) best = i;
      });
      activate(best);
    }

    var queued = false;
    function schedule() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(function () {
        queued = false;
        update();
      });
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
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
