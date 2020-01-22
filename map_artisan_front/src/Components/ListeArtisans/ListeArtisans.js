import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';

class ListeArtisans extends React.Component {

  addListSpecialty = (datalist) => {
    return datalist.map((artisan,index) => {
      // console.log(artisan)
      return (
        <li key ={index}>{artisan.entreprise_nom}  {artisan.site_internet} {artisan.metier_id}</li>
      )
    })
  }

  render() {

    return (
      <>
        <Navbar />
        <h1>Liste de tous les artisans</h1>
        <div>{this.addListSpecialty(this.props.data)}</div>
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
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(ListeArtisans);

