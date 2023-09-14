// Burger menu
let burger = document.querySelector(".burger");
let menu = document.querySelector(".nav");
let menuLinks = menu.querySelectorAll(".nav__link");
let closeBurger = document.querySelector(".burger-close");

burger.addEventListener("click", function () {

  burger.classList.add("burger--active");

  menu.classList.add("nav--active");

  document.body.classList.add("stop-scroll");

  search.classList.remove("header__search--active");
});

closeBurger.addEventListener("click", function () {

  closeBurger.classList.remove("burger--active");

  menu.classList.remove("nav--active");

  document.body.classList.remove("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {

    burger.classList.remove("burger--active");

    menu.classList.remove("nav--active");

    document.body.classList.remove("stop-scroll");

  })
})

// Search

let searchBtn = document.querySelector(".header__search-btn");
let closeBtn = document.querySelector(".search__close-btn");
let search = document.querySelector(".header__search");

searchBtn.addEventListener("click", () => {

  search.classList.add("header__search--active");
  searchBtn.classList.add("header__search-btn--hidden");

  burger.classList.remove("burger--active");
  menu.classList.remove("nav--active");
  document.body.classList.remove("stop-scroll");
});

closeBtn.addEventListener("click", () => {
  search.classList.remove("header__search--active");
  searchBtn.classList.remove("header__search-btn--hidden");
});

// Slider

const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
});

// Tabs

let tabBtn = document.querySelectorAll(".how-working__btn-step");
let tabItem = document.querySelectorAll(".how-working__text-wrapper");
let tabContent = document.querySelector(".how-working__content");
let clicker = true;
tabBtn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (clicker === true) {
      clicker = false;
      setTimeout(() => {
        clicker = true;
      }, 800);

      const path = e.currentTarget.dataset.path;

      tabBtn.forEach((btn) => {
        btn.classList.remove("how-working__btn-step--active")
      });
      e.currentTarget.classList.add("how-working__btn-step--active");

      tabItem.forEach((elem) => {
        elem.classList.remove("how-working__text-wrapper--active")
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("how-working__text-wrapper--active");
      if (tabContent.dataset.wrapper != path) {
        tabContent.dataset.wrapper = 0;
        setTimeout(() => {
          tabContent.dataset.wrapper = path;
        }, 400);
      }
    }
  });
});

// Accordion

new Accordion(".faq__list", {
  elementClass: "faq__item",
  triggerClass: "faq__btn",
  panelClass: "faq__item-inside",
  activeClass: "faq__item--active"
});





