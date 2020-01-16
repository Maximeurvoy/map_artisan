import React from 'react';
import L, { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import './MapArtisans.css';

class MapArtisans extends React.Component {
  constructor() {
    super()
    this.state = {
      center: [47.2173, -1.5534],
      zoom: 14
    }

  }
  componentDidMount() {

    navigator.geolocation.getCurrentPosition(function success(pos) {
      var crd = pos.coords;

      console.log('Votre position actuelle est :');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude : ${crd.longitude}`);
      console.log(`La précision est de ${crd.accuracy} mètres.`);
      let array = [crd.latitude, crd.longitude]
      return array
    })

    this.setState({ center: this.array })
    console.log(this.array)
    // create map
    this.map = L.map('map', {
      center: this.state.center,
      zoom: this.state.zoom,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    //definition des caractéristiques de l'icone
    const myIcon = L.icon({
      iconUrl: 'logo192.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      // shadowUrl: 'logo192.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
      // imagePath: Icon.Default
    });

    // const marker = L.marker([51.5, -0.09]).addTo(this.map);



    //creation d'un marker icon
    const layer = L.marker((this.state.center), { icon: myIcon }).addTo(this.map);
    layer.addTo(this.map);

    //description du popup
    const popup = L.popup({
      minWidth: 30,
      autoClose: true
    })
      .setLatLng(this.state.center)
      .setContent('<p>Hello world!<br />This is Michel.</p>');
    // creation d'un popup sur le marker
    layer.bindPopup(popup);

  }


  render() {
    return <div id="map" className='testMap'>test</div>
  }
}

export default MapArtisans;