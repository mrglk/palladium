import Swiper from "swiper/bundle";

export function initProjectsSlider() {
  new Swiper('.js-project-slider', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 15,

    navigation: {
      nextEl: '.js-project-slider-next',
      prevEl: '.js-project-slider-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
}