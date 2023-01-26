import "./css/style.css";
import "swiper/css/bundle";
import { initCustomSelect } from "./js/initCustomSelect";
import { initModals } from "./js/initModals";
import { initRangeSlider } from "./js/rangeSlider";

document.addEventListener("DOMContentLoaded", function () {
    initCustomSelect()
    initModals()
    initRangeSlider()
});
