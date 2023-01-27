import Swiper from "swiper/bundle";

export function initReviews() {
  new Swiper('.js-reviews-slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: false,
    pagination: {
      el: ".js-reviews-slider-progress",
      type: "progressbar",
    },
  })
}