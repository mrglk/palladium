const chartData = {
  2013: {
    cost: {
      uae: 1223,
      turkey: 36347,
      spain: 142223
    },
    increase: {
      uae: 12,
      turkey: 47,
      spain: 13,
    },
  },
  2018: {
    cost: {
      uae: 1223,
      turkey: 3647,
      spain: 14223
    },
    increase: {
      uae: 123,
      turkey: 37,
      spain: 123,
    },
  },
  2023: {
    cost: {
      uae: 1223,
      turkey: 3347,
      spain: 14223
    },
    increase: {
      uae: 123,
      turkey: 47,
      spain: 223,
    },
  },
  2028: {
    cost: {
      uae: 1223,
      turkey: 3347,
      spain: 1423
    },
    increase: {
      uae: 123,
      turkey: 347,
      spain: 123,
    },
  },
  2033: {
    cost: {
      uae: 1223,
      turkey: 36347,
      spain: 142223
    },
    increase: {
      uae: 123,
      turkey: 347,
      spain: 123,
    },
  },
};

export function initChart() {
  const chartOverlay = document.querySelector('.js-chart-overlay');
  const chartRange = document.querySelector('.js-chart-range');

  const pricePlaceTurkey = document.querySelector('.js-chart-price-turkey');
  const pricePlaceUae = document.querySelector('.js-chart-price-uae');
  const pricePlaceSpain = document.querySelector('.js-chart-price-spain');

  const increasePlaceTurkey = document.querySelector('.js-chart-increase-turkey');
  const increasePlaceUae = document.querySelector('.js-chart-increase-uae');
  const increasePlaceSpain = document.querySelector('.js-chart-increase-spain');

  if (!chartRange || !chartOverlay) {
    return;
  }

  chartRange.addEventListener('input', function(e) {
    const value = e.target.value;
    const currentPercent = (value - chartRange.min) / (chartRange.max - chartRange.min) * 100;

    chartOverlay.style.width = `${currentPercent}%`;

    pricePlaceTurkey.innerText = chartData[value].cost.turkey;
    pricePlaceUae.innerText = chartData[value].cost.uae;
    pricePlaceSpain.innerText = chartData[value].cost.spain;

    increasePlaceTurkey.innerText = chartData[value].increase.turkey
    increasePlaceUae.innerText = chartData[value].increase.uae
    increasePlaceSpain.innerText = chartData[value].increase.spain
  });
}