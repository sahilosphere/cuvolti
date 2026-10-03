document.addEventListener("DOMContentLoaded", function () {
  // Fade-in on scroll
  var fadeEls = document.querySelectorAll(".fade-in-up");
  if ("IntersectionObserver" in window && fadeEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // Category filter — dropdown select, works on any page with .category-select + .filter-item[data-category]
  var selects = document.querySelectorAll(".category-select");
  selects.forEach(function (select) {
    select.addEventListener("change", function () {
      var value = select.value;
      var items = document.querySelectorAll(".filter-item");
      items.forEach(function (item) {
        if (value === "All" || item.getAttribute("data-category") === value) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
