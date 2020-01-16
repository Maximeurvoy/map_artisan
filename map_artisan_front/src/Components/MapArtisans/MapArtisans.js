import React from 'react';
import L, { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import './MapArtisans.css';
import axios from 'axios';
import { connect } from 'react-redux';

class MapArtisans extends React.Component {
  constructor() {
    super()
    this.state = {
      center: [47.2173, -1.5534],
      zoom: 14,
      artisansNantais: ['rien']
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
      popupAnchor: [-3, -76],      // shadowUrl: 'logo192.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
    });

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

    //Fonction qui crée des marqueurs
    let markerCreation = (LatLon, PopupContent) => {
      //creation d'un marker icon
      const layer = L.marker((LatLon), { icon: myIcon }).addTo(this.map);
      layer.addTo(this.map);
      //description du popup
      const popup = L.popup({
        minWidth: 30,
        autoClose: true
      })
        .setLatLng(LatLon)
        .setContent(`<p>${PopupContent}</p>`);
      // creation d'un popup sur le marker
      layer.bindPopup(popup);
    }
  }

  //Fonction qui convertie les adresses en lat lon
  adressToLatLon =  (number, adress, city) => {
    const apiKey = 'cRBTog5mofIxlkvzOOfOxEffCfUBEifgKGXuSazoAuc'
    axios(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apiKey}&searchtext=${number}+${adress}+${city}`)
      .then(function (response) {
        let lat = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
        let lon = response.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude
        let result = []
        result.push(lat)
        result.push(lon)
        console.log(result)
        return result
      }) 
     this.setState({artisansNantais:this.result})
  }

  //Fonction qui générère les icones en fonction des artisans
  iconByArtisan = async (data) => {
    await data.map(adress => {
      this.adressToLatLon(adress.numero, adress.adresse, adress.ville)
    })
    console.log(this.state.artisansNantais)
    console.log('test')
    console.log(this.state.artisansNantais)
  }
  run = () => {
   this.iconByArtisan(this.props.data)
  }

  render() {
    return (
      <>
        <button onClick={() => { console.log(this.state.artisansNantais) }}>click</button>
        <button onClick={this.run}>clickrun</button>
        <div id="map" className='testMap'>test</div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(MapArtisans);