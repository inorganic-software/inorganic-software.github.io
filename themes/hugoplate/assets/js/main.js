// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

 // Partner Slider
  // ----------------------------------------
  new Swiper(".partner-slider", {
    spaceBetween: 24,
    loop: false,
    autoplay: true,
    pagination: {
      el: ".partner-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  // Clients Slider
  // ----------------------------------------
  new Swiper(".clients-slider", {
    spaceBetween: 24,
    loop: false,
    autoplay: true,
    pagination: {
      el: ".clients-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        watchSlidesProgress: true,
        slidesPerView: 3,
      },
      992: {
        watchSlidesProgress: true,
        slidesPerView: 3,
      },
    },
  });
})();
