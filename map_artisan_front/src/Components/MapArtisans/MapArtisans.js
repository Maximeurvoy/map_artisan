import React from 'react';
import L, { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import './MapArtisans.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStore } from 'redux';

class MapArtisans extends React.Component {
  constructor() {
    super()
    this.state = {
      center: [55.2173, -1.5534],
      zoom: 13,
      artisansNantais: ['rien'],
      iconUrl: 'redIcon.png',
      iconSize: [38, 50],
      iconAnchor: [22, 49],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]

    }
  }

  createMarker = async (arrayLatLon,name) => {
    for (let i = 0; i < arrayLatLon.length; i++) {
      const theIcon = L.icon({
        iconUrl: this.state.iconUrl,
        iconSize: this.state.iconSize,
        iconAnchor: this.state.iconAnchor,
        popupAnchor: this.state.popupAnchor,
        shadowSize: this.state.shadowSize,
        shadowAnchor: this.state.shadowAnchor,
      });
      const layertwo = L.marker(arrayLatLon[i], { icon: theIcon }).addTo(this.map);
      layertwo.addTo(this.map)
    
      const popuptwo = L.popup({
        minWidth: 30,
        autoClose: true
      })
        .setLatLng(this.state.center)
        .setContent(`<p>${name[i]}</p>`);
        layertwo.bindPopup(popuptwo);

    }
  }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition((pos) => {
        let crd = pos.coords;
        let array = [crd.latitude, crd.longitude]
        this.setState({ center: array })
      })

      console.log(this.state.center)

      axios.get('http://localhost:8000/artisans')
        .then(response => { this.props.initialyse(response.data) })
        .then(() => {
          this.setState({ listicon: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.lat, pos.lon]}) })
          this.setState({ listname: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.entreprise_nom]}) })

        })
        .then(() => {
          this.map = L.map('map', {
            center: this.state.center,
            zoom: 13,
            layers: [
              L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'),
            ]
          });
          //definition des caractéristiques de l'icone
          const myIcon = L.icon({
            iconUrl: this.state.iconUrl,
            iconSize: this.state.iconSize,
            iconAnchor: this.state.iconAnchor,
            popupAnchor: this.state.popupAnchor,
            shadowSize: this.state.shadowAnchor,
            shadowAnchor: this.state.shadowAnchor
          });

          //creation d'un marker icon
          const layer = L.marker((this.state.center), { icon: myIcon }).addTo(this.map);

          //description du popup
          const popup = L.popup({
            minWidth: 30,
            autoClose: true
          })
            .setLatLng(this.state.center)
            .setContent('<p>Hello world!<br/>This is Michel.</p>');

          // creation d'un popup sur le marker
          layer.bindPopup(popup);

          this.createMarker(this.state.listicon,this.state.listname)
        })
    // this.setState({ listicon: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.lat, pos.lon] }) })
    // let test2 = [[47.2273, -1.5634], [47.23, -1.582]]
    // createMarker(test2)
    console.log(this.state.center)
  }

  render() {

    return (
      <>
        <div id="map" className='testMap'></div>
        <button onClick={() => console.log(this.state.listicon)}>testlist</button>
        <button onClick={() => console.log(this.state.center)}>testlist</button>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initialyse: (data) => {
      dispatch({ type: 'INITIALYSE', payload: data })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapArtisans);




  // //Fonction qui convertie les adresses en lat lon
  // adressToLatLon = (number, adress, city) => {
  //   const apiKey = 'cRBTog5mofIxlkvzOOfOxEffCfUBEifgKGXuSazoAuc'
  //   axios(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apiKey}&searchtext=${number}+${adress}+${city}`)
  //     .then(function (response) {
  //       let lat = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
  //       let lon = response.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude
  //       let result = []
  //       result.push(lat)
  //       result.push(lon)
  //       console.log(result)
  //       return result
  //     })
  //   this.setState({ artisansNantais: this.result })
  // }
