import Swiper from "swiper/bundle";

export function initReviews() {
  new Swiper('.js-reviews-slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: false,
    mousewheel: {
      invert: true,
    },
    pagination: {
      el: ".js-reviews-slider-progress",
      type: "progressbar",
    },
  })
}