import React from 'react';
import L, { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import './MapArtisans.css';
import axios from 'axios';
import { connect } from 'react-redux';
// import { iconPerson } from '../Icon/icon';

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

  createMarker = async (arrayLatLon, name) => {
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

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      let crd = pos.coords;
      let array = [crd.latitude, crd.longitude]
      this.setState({ center: array })
    })

    console.log(this.state.center)

    axios.get('http://localhost:8000/artisans')
      .then(response => { this.props.initialyse(response.data) })
      .then(() => {
        this.setState({ listicon: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.lat, pos.lon] }) })
        this.setState({ listname: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.entreprise_nom] }) })

      })
      .then(() => {
        this.map = L.map('map', {
          center: this.state.center,
          zoom: 13,
          layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'),
          ]
        });
        this.createMarker(this.state.listicon, this.state.listname)
      })
      
  }

  render() {

    console.log(this.state.center)
    return (
      <>
        <div id="map" className='testMap' ></div>
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
