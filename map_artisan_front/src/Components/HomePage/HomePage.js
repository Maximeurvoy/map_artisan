import React from 'react';
import Navbar from '../Navbar/Navbar';
import ButtonsList from '../ButtonsList/Buttons.list';
import MapArtisan2 from '../MapArtisan2/MapArtisan2';
import { connect } from 'react-redux';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(){
    super()
  }


async componentDidMount() {
 await axios.get('http://localhost:8000/artisans')
    .then(response => { this.props.initialyse(response.data) })

await  axios.get('http://localhost:8000/avis')
    .then(response => this.props.initialyseAvis(response.data))

 await axios.get('http://localhost:8000/metiers')
    .then(response => { this.props.initialyseMetier(response.data) })

}
render(){

  return (
    <>
      <Navbar/>
      <h1>Map Artisans</h1>
      <p className='d-none d-md-block d-xl-none '>Cliquer sur la catégorie de votre choix pour voir les artisans Nantais près de vous</p>
      <p>A venir : manifestations artisanales et expositions</p>

      <ButtonsList/>
      <MapArtisan2/>
    </>
  )
  }

}
const mapStateToProps = state => {
  return {
    theme: state.theme,
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

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);



