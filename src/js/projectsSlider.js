import Swiper from 'swiper/bundle';
import { apartmensData } from './data/apartments';
import { getPageLang } from './utils/helpers';

const slider = document.querySelector('.js-project-slider');
const cardsContainer = document.querySelector('.js-project-data');
const projectFilter = document.querySelector('.js-project-filter');
const pageLang = getPageLang();
const apartmentsDataLang = pageLang === 'ru' ? apartmensData.ru : apartmensData.en;
// const projectSliderItems = [...slider?.firstElementChild.children || []];

let swiper;

export function initProjectsSlider() {
  if (!slider) {
    return;
  }

  swiper = runSwiper('apartments');

  projectFilter.addEventListener('click', function(e) {
    const target = e.target;
    const type = target.dataset.type;

    if (!type) {
      return;
    }

    [...projectFilter.children].forEach((item) => {
      item.classList.toggle('filterButton--active', item === target);
    });

    swiper.destroy(true, true);

    swiper = runSwiper(type);
  });
}

function runSwiper(type) {
  // const projectSliderItems = [...slider?.firstElementChild.children || []];
  
  if (!slider) {
    return;
  }

  // slider.firstElementChild.innerHTML = projectSliderItems.filter((slide) => slide.dataset.type === type).map(item => item.outerHTML).join('')

  addCardsToSlider(apartmentsDataLang, type)

  return new Swiper('.js-project-slider', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 15,

    navigation: {
      nextEl: '.js-project-slider-next',
      prevEl: '.js-project-slider-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
}

function addCardsToSlider(data, type) {
  cardsContainer.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    if (data[i].category === type) {
      cardsContainer.innerHTML += renderCard(data[i])
    }
  }
}

function renderCard(cardData) {
  const { id, title, address, price, below, category, photos } = cardData;
  const photo = id === 1720977 ? photos[4] : photos[0];
  return `<div data-type=${category} class="projectItem swiper-slide js-open-apartment-modal" data-id=${id}>
      <div class="projectItem__photo">
        <img alt=${address} src=${photo}>
      </div>
      <div class="projectItem__description">
        <div class="projectItem__geo">
          <svg class="projectItem__geoIcon">
            <use href="./spritemap.svg#icon-geo-icon" />
          </svg>
          <p class="projectItem__geoText">${address}</p>
        </div>
        <p class="projectItem__title">${title}</p>
        <div class="projectItem__data">
          <div class="projectItem__cell">
            <p class="projectItem__dataTitle">Rooms</p><span class="projectItem__dataNum">2</span>
          </div>
          <div class="projectItem__cell">
            <p class="projectItem__dataTitle">Area</p><span class="projectItem__dataNum">150 m2</span>
          </div>
        </div>
        <div class="projectItem__sale">
          <p class="projectItem__price">${price}</p>
          <div class="projectItem__market">
            <svg class="projectItem__marketIcon">
              <use href="./spritemap.svg#icon-lightning-icon" />
            </svg>
            <p class="projectItem__marketText">Below market by ${below}</p>
          </div>
        </div>
      </div>
      <div class="moreButton">
        <p class="moreButton__text">More info</p>
        <div class="moreButton__line"></div>
        <button class="moreButton__button js-open-apartment-modal" data-id=${id}></button>
      </div>
    </div>`
}