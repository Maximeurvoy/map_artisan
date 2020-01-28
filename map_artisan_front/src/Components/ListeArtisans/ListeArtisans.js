import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


class ListeArtisans extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.data
    }

  }

  // componentDidMount(){
  //   this.setState({list:this.props.data})
  // }
  orderByAlphabetic = () => {

    let tri = (a, b) => {
      if (a.entreprise_nom < b.entreprise_nom) return -1;
      else if (a.entreprise_nom == b.entreprise_nom) return 0;
      else return 1;
    }
    this.setState({ listAlphabetic: [...this.state.list].sort(tri) })
  }


  orderById = (a, b) => {
    if (a.id < b.id) return -1;
    else if (a.id == b.id) return 0;
    else return 1;
  }

  orderByEntrepriseNom = (a, b) => {
    if (a.entreprise_nom < b.entreprise_nom) return -1;
    else if (a.entreprise_nom == b.entreprise_nom) return 0;
    else return 1;
  }

  addListSpecialty = (datalist) => {
    return datalist.map((artisan, index) => {
      return (
        <li key={index}>
          <Link className="navbar-brand text-black" to={`/artisan/${artisan.id}`}>{artisan.entreprise_nom}  {artisan.site_internet} {artisan.metier_id}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <h1>Liste de tous les artisans</h1>
        <p>Trier par</p>
        <button onClick={() => this.setState({ list: (this.state.list.sort(this.orderById).reverse()) })}>Dernier enregistrement</button>
        <button onClick={()=>console.log('notes décroissantes à venir')}>Notes décroissantes</button>
        <button onClick={() => this.setState({ list: this.state.list.sort(this.orderByEntrepriseNom) })}>Ordre alphabétique</button>

        {/* {this.addListSpecialty(this.props.data)} */}
        {this.addListSpecialty(this.state.list)}
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

