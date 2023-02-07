import Swiper from "swiper/bundle";

export function initReviews() {
  new Swiper('.js-reviews-slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
      disableOnInteraction: true,
    },
    speed: 8000,
    simulateTouch: false,
    mousewheel: false,
    pagination: {
      el: ".js-reviews-slider-progress",
      type: "progressbar",
    },
  })
}