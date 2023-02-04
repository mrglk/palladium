import Swiper from "swiper/bundle";

export function initReviews() {
  new Swiper('.js-reviews-slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    speed: 8000,
    mousewheel: {
      invert: true,
    },
    pagination: {
      el: ".js-reviews-slider-progress",
      type: "progressbar",
    },
  })
}