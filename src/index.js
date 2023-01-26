import "./css/style.css";
import "swiper/css/bundle";
import { customSelect } from "./js/customSelect";
import { initModals } from "./js/initModals";
import { initRangeSlider } from "./js/rangeSlider";
import { initBurgerMenu } from './js/burgerMenu';

document.addEventListener("DOMContentLoaded", function () {
    customSelect()
    initModals()
    initRangeSlider()
    initBurgerMenu()
});
