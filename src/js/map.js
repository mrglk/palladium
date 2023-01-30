import { Loader } from 'google-maps';

const center = { lat: 25.1624427, lng: 55.2226371 };
let timeoutId = null;
let map;

const mapInfo = document.getElementById('map-info');
const mapElement = document.getElementById('map');

export async function initMap() {
  const loader = new Loader('AIzaSyCFVN9lovd3dC-PKoK-7VENM-vhhNUcXS8', {});
  const google = await loader.load();

  const styledMapType = new google.maps.StyledMapType(styledData);

  map = new google.maps.Map(mapElement, {
    center,
    zoom: 12.5,
    disableDefaultUI: true,
    // draggable: false,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  setMarkers(map);

  map.addListener('center_changed', () => {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      map.panTo(center);
      map.setZoom(12.5);
    }, 2000);
  });
}

function setMarkers(map) {
  const image = {
    url: '/img/map-point.svg',
    size: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 25),
  };

  for (let i = 0; i < markersData.length; i++) {
    const point = markersData[i];

    const marker = new google.maps.Marker({
      position: { lat: point[1], lng: point[2] },
      map,
      icon: image,
      title: point[0],
      cursor: 'pointer',

    });

    google.maps.event.addListener(marker, 'click', function(e) {
        const target = e.domEvent.target;

        const left = getLeft(target);
        const top = getTop(target);

        mapInfo.style.left = `${left + 25}px`;
        mapInfo.style.top = `${top - 5}px`;

        mapInfo.classList.add('mapItem--active');

        setTimeout(() => {
          document.addEventListener('click', hideContentInfo);
        });

      },
    );
  }
}

function getLeft(element, left = 0) {
  if (element.id === 'map') {
    return left;
  }

  return getLeft(element.parentElement, left + element.offsetLeft);
}

function getTop(element, top = 0) {
  if (element.id === 'map') {
    return top;
  }

  return getLeft(element.parentElement, top + element.offsetTop);
}

function hideContentInfo(e) {
  if (e.target.closest('.mapItem')) {
    return;
  }

  document.removeEventListener('click', hideContentInfo);
  mapInfo.classList.remove('mapItem--active');
}

const markersData = [
  ['Bondi Beach', 25.115271, 55.137262, 'id-1'],
];

const styledData = [
  {
    'featureType': 'administrative',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#444444',
      },
    ],
  },
  {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [
      {
        'color': '#f2f2f2',
      },
    ],
  },
  {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'off',
      },
    ],
  },
  {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [
      {
        'saturation': -100,
      },
      {
        'lightness': 45,
      },
    ],
  },
  {
    'featureType': 'road.highway',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'simplified',
      },
    ],
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off',
      },
    ],
  },
  {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'off',
      },
    ],
  },
  {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [
      {
        'color': '#ddd5cb',
      },
      {
        'visibility': 'on',
      },
    ],
  },
];