import L from 'leaflet';

const redIcon = new L.Icon({
  iconUrl: 'redIcon.png',
  iconRetinaUrl: 'redIcon.png',
  iconAnchor: [22, 49],
  popupAnchor: null,
  popupAnchor: [-3, -76],

  shadowUrl: null,
  shadowSize: [68, 95],
  shadowAnchor: null,
  iconSize: new L.Point(38, 50),
  // className: 'leaflet-div-icon'
});

export { redIcon };

