const chartData = {
  2013: {
    cost: {
      uae: 2500,
      turkey: 4000,
      spain: 5500
    },
    increase: {
      uae: 20,
      turkey: 20,
      spain: 10,
    },
  },
  2018: {
    cost: {
      uae: 300,
      turkey: 5000,
      spain: 7000
    },
    increase: {
      uae: 90,
      turkey: 40,
      spain: 40,
    },
  },
  2023: {
    cost: {
      uae: 4500,
      turkey: 6000,
      spain: 9000
    },
    increase: {
      uae: 120,
      turkey: 50,
      spain: 50,
    },
  },
  2028: {
    cost: {
      uae: 5500,
      turkey: 7000,
      spain: 11000
    },
    increase: {
      uae: 160,
      turkey: 80,
      spain: 60,
    },
  },
  2033: {
    cost: {
      uae: 6000,
      turkey: 9000,
      spain: 14000
    },
    increase: {
      uae: 190,
      turkey: 90,
      spain: 70,
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