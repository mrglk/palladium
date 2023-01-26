import DoubleSlider from 'double-slider';

export function initRangeSlider() {
    const rangeSlider = new DoubleSlider(document.getElementById('my-slider'));

    rangeSlider.addEventListener('slider:change', () => {
      const {min, max} = rangeSlider.value;
      const minPrice = document.querySelector(".js-range-min");
      const maxPrice = document.querySelector(".js-range-max");
      console.log(`Min is: ${min}, max is: ${max}`);

      minPrice.innerHTML = min;
      maxPrice.innerHTML = max;
    });
}