import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapArtisan2.css'
import {Link} from 'react-router-dom';

import L, { popup } from 'leaflet';
import { redIcon } from './RedIcon.js';
import 'leaflet/dist/leaflet.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { createStore } from 'redux';
delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class MapArtisan2 extends React.Component {

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
      shadowAnchor: [22, 94],
      listicon: [[47, -1.55], [47.25, -1.56]],
      listname: [['robert'], ['simon']],
      artisan: [[{
        position: [47, -1.55],
        nom: '',
        id_metier: 0
      }]],

      metier_idChoose: 1,
      VisibilityLocalisation: false
    }
  }

  MarkerAuto = () => {
    for (let i = 0; i < this.state.listicon.length; i++) {
      return (
        <Marker position={this.state.listicon[i]} icon={redIcon}>
          <popup>
            {this.state.listname[i]}
          </popup>
        </Marker>
      )
    }
  }

  handleHere = () => {
    this.setState({ VisibilityLocalisation: !this.state.VisibilityLocalisation })
  }

  average = (arrayData) => {
    let somme = 0
    for (let i = 0; i < arrayData.length; i++) {
      somme += arrayData[i]
    }
    let moy = somme/arrayData.length
    return moy
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      let crd = pos.coords;
      let array = [crd.latitude, crd.longitude]
      this.setState({ center: array })
    })

    console.log(this.state.center)

    // axios.get('http://localhost:8000/artisans')
    //   .then(response => { this.props.initialyse(response.data) })
    //   .then(() => {
    //     this.setState({ listicon: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.lat, pos.lon] }) })
    //     this.setState({ listname: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.entreprise_nom] }) })
    //     this.setState({
    //       artisan: [this.props.data.filter(pos => pos.lat).map(pos => { return { position: [pos.lat, pos.lon], nom: pos.entreprise_nom, id_metier: pos.metier_id } })]
    //     })
    //   })

    axios.get('http://localhost:8000/avis')
      .then(response => this.props.initialyseAvis(response.data))

    axios.get('http://localhost:8000/metiers')
      .then(response => { this.props.initialyseMetier(response.data) })

    console.log(this.state.artisan)
    this.MarkerAuto()
    console.log(this.props.data)
  }

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
    });

    return (
      <>
        <LeafletMap
          center={this.state.center}
          zoom={this.state.zoom}
          maxZoom={19}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          {this.state.VisibilityLocalisation && <Marker position={this.state.center} >
            <Popup>
              you are here
          </Popup>
          </Marker>}
          <Marker position={[40, 10]} icon={redIcon} >
            <Popup>
              Popup for any custom information.
          </Popup>
          </Marker>
          {/* {this.state.artisan[0].filter(pos => pos.id_metier === this.props.metier_idChoose).map((pos, index) => {
          return (
            <Marker key={index} position={pos.position} icon={redIcon}>
              <Popup>
                <h2>{pos.nom}</h2>
                <p>{pos.commentaire}</p>
              </Popup>
        </Marker>)
        })} */}
          {this.props.data.filter(pos => pos.metier_id === this.props.metier_idChoose).map((pos, index) => {
            return (
              <Marker key={index} position={[pos.lat, pos.lon]} icon={redIcon}>
                <Popup>
                  <h2>{pos.entreprise_nom}</h2>
                  <Link className="navbar-brand text-black" to={`/artisan/${pos.id}`}>plus d'info </Link>
                <p>  note moyenne : {this.average(pos.note)}</p>

                  {pos.commentaire.map((comment,index) => <li key={index}>{comment}</li>)}


                </Popup>
              </Marker>)
          })}
        </LeafletMap>
        <button onClick={this.handleHere} className="btn btn-secondary btn-lg col-md-6 mb-6">{this.state.VisibilityLocalisation ? 'Cacher localisation' : 'Se localiser'}</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    data: state.data,
    metier_idChoose: state.metier_idChoose,
    dataAvis: state.dataAvis,
    dataMetier: state.dataMetier

  }
}
const mapDispatchToProps = dispatch => {
  return {
    initialyse: (data) => {
      dispatch({ type: 'INITIALYSE', payload: data })
    },
    initialyseAvis: (data) => {
      dispatch({ type: 'INITIALYSEAVIS', payload: data })
    },
    initialyseMetier: (data) => {
      dispatch({ type: 'INITIALYSEMETIER', payload: data })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapArtisan2);






// class MapArtisans extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       center: [55.2173, -1.5534],
//       zoom: 13,
//       artisansNantais: ['rien'],
//       iconUrl: 'redIcon.png',
//       iconSize: [38, 50],
//       iconAnchor: [22, 49],
//       popupAnchor: [-3, -76],
//       shadowSize: [68, 95],
//       shadowAnchor: [22, 94]

//     }
//   }

//   createMarker = async (arrayLatLon, name) => {
//     for (let i = 0; i < arrayLatLon.length; i++) {
//       const theIcon = L.icon({
//         iconUrl: this.state.iconUrl,
//         iconSize: this.state.iconSize,
//         iconAnchor: this.state.iconAnchor,
//         popupAnchor: this.state.popupAnchor,
//         shadowSize: this.state.shadowSize,
//         shadowAnchor: this.state.shadowAnchor,
//       });
//       const layertwo = L.marker(arrayLatLon[i], { icon: theIcon }).addTo(this.map);
//       layertwo.addTo(this.map)

//       const popuptwo = L.popup({
//         minWidth: 30,
//         autoClose: true
//       })
//         .setLatLng(this.state.center)
//         .setContent(`<p>${name[i]}</p>`);
//       layertwo.bindPopup(popuptwo);
//     }
//   }

//   async componentDidMount() {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       let crd = pos.coords;
//       let array = [crd.latitude, crd.longitude]
//       this.setState({ center: array })
//     })

//     console.log(this.state.center)

//     axios.get('http://localhost:8000/artisans')
//       .then(response => { this.props.initialyse(response.data) })
//       .then(() => {
//         this.setState({ listicon: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.lat, pos.lon] }) })
//         this.setState({ listname: this.props.data.filter(pos => pos.lat).map(pos => { return [pos.entreprise_nom] }) })

//       })
//       .then(() => {
//         this.map = L.map('map', {
//           center: this.state.center,
//           zoom: 13,
//           layers: [
//             L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'),
//           ]
//         });
//         this.createMarker(this.state.listicon, this.state.listname)
//       })

//   }

//   render() {

//     console.log(this.state.center)
//     return (
//       <>
//         <div id="map" className='testMap' ></div>
//         <button onClick={() => console.log(this.state.listicon)}>testlist</button>
//         <button onClick={() => console.log(this.state.center)}>testlist</button>


//       </>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     data: state.data
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     initialyse: (data) => {
//       dispatch({ type: 'INITIALYSE', payload: data })
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(MapArtisans);
