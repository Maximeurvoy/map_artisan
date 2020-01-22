import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css'
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class Maptest extends React.Component {
  
  render() {
    const iconPerson = new L.Icon({
      iconUrl: 'redIcon.png',
      iconRetinaUrl: 'redIcon.png',
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(60, 75),
      // className: 'leaflet-div-icon'
  });
  
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
      <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[50, 10]} >
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
        <Marker position={[40, 10]} icon= { iconPerson } >
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>

      </LeafletMap>
    );
  }
}

export default Maptest