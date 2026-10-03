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

  // Category filter (works on any page that has .category-filter + .article-row[data-category])
  var filterButtons = document.querySelectorAll(".category-filter [data-filter]");
  var rows = document.querySelectorAll(".article-row");
  if (filterButtons.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var value = btn.getAttribute("data-filter");
        filterButtons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        rows.forEach(function (row) {
          if (value === "All" || row.getAttribute("data-category") === value) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        });
      });
    });
  }
});
