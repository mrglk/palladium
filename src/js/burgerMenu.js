import { Body } from './classes/Body';

export function initBurgerMenu() {
  const burgerMenuButton = document.querySelector('.js-burger-menu-button');
  const burgerMenu = document.querySelector('.js-burger-menu');
  const langButton = document.querySelector('.js-lang-button');

  if (!burgerMenuButton || !burgerMenu) {
    return
  }

  burgerMenuButton.addEventListener('click', function(e) {
    e.preventDefault()

    burgerMenu.classList.toggle('burgerMenu--active')
    burgerMenuButton.classList.toggle('header__menuButton--active')
    langButton.classList.toggle('header__langButtonWrapper--openedMenu')

    Body.toggleBody()
    Body.toggleOverlay()
  })
}