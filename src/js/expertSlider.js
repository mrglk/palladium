import Swiper from "swiper/bundle";

const quotes = document.querySelectorAll('.js-experts-quotes')
const nextList = document.querySelectorAll('.js-experts-next')
const nextExpertButton = document.querySelector('.js-next-expert-button')

export function initExpertSlider() {
  if (!quotes || !nextList || !nextExpertButton) {
    return
  }

  const swiper = new Swiper('.js-experts-slider', {
    effect: 'fade',
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    on: {
      slideChange
    }
  })

  nextExpertButton.addEventListener('click', function() {
    swiper.slideTo(swiper.realIndex + 2)
  })
}

const slideChange = (swiper) => {
  const currentIndex = swiper.realIndex

  for (let i = 0; i < quotes.length; i++) {
    quotes[i].classList.toggle('experts__quote--active', i === currentIndex)
    nextList[i].classList.toggle('experts__view--active', i === currentIndex)
  }
}