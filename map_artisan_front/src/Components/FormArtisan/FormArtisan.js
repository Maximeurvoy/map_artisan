import React from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import './FormArtisan.css';

class FormArtisan extends React.Component {
  constructor() {
    super()
    this.state = {
      entreprise_nom: "",
      nom_artisan: "",
      prenom_artisan: "",
      site_internet: "",
      numero: "",
      adresse: "",
      photo_url1: "",
      photo_url2: "",
      photo_url3: "",
      ville: "",
      code_postal: "",
      metier_id: "1",
      listMetier: []
    }
  }

  submitForm = (event) => {
    const { entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, photo_url1, photo_url2, photo_url3, ville, code_postal, metier_id } = this.state
    const form = { entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, ville, code_postal, metier_id }
    console.log(this.state)
    axios.post('http://localhost:8000/artisans', form)
      .then(response=> { if(response.data != null){ axios.get('http://localhost:8000/artisans')
      .then(response => { this.props.initialyse(response.data) })
      .then(() => this.props.history.push("/avis"));
} })
      .catch(err => {
        console.error(err);
        alert('error missing field')
      });
    event.preventDefault();
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    axios.get('http://localhost:8000/metiers')
      .then(result => this.setState({ listMetier: (result.data) }))
  }

  render() {
    return (
      <>
        <Navbar />
        <h1>Form Artisan</h1>
        <form className="needs-validation bg-secondary text-black rounded container-fluid" noValidate>

          <div className="form-row">

            <div className="col-md-4 mb-3 ">
              <label htmlFor="validationTooltip01">Nom de l'entreprise</label>
              <input type="text" name="entreprise_nom" className="form-control" onChange={this.handleInputChange}
                id="validationTooltip01" placeholder="Nom commercial ou marque" required />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltip02">Nom de l'artisan</label>
              <input type="text" name="nom_artisan"
                onChange={this.handleInputChange} className="form-control" id="validationTooltip02" placeholder="Nom" required />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltip02">Prenom de l'artisan</label>
              <input type="text" name="prenom_artisan" onChange={this.handleInputChange} className="form-control"
                id="validationTooltipprenom" placeholder="Prénom" required />

            </div><div className="valid-tooltip">
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltipUsername">Site internet</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="validationTooltipUsernamePrepend">www</span>
                </div>
                <input type="url" name="site_internet" onChange={this.handleInputChange} className="form-control" id="validationTooltipUsername" placeholder="www.monartisan.fr" aria-describedby="validationTooltipUsernamePrepend" required />
                <div className="invalid-tooltip">
                  Please choose a unique and valid username.
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">

            <div className="col-md-3 mb-3">
              <label htmlFor="numero">numero</label>
              <input type="text" name="numero" onChange={this.handleInputChange} className="form-control" id="numero" placeholder="12" required />
            </div>

            <div className="col-md-9 mb-3">
              <label htmlFor="inputAddress">Adresse</label>
              <input type="text" name="adresse" onChange={this.handleInputChange} className="form-control" id="inputAddress" placeholder="avenue de la création" required />
            </div>

          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationTooltip03">Ville</label>
              <input type="text" name="ville" onChange={this.handleInputChange} className="form-control" id="validationTooltip03" placeholder="Nantes" required />
              <div className="invalid-tooltip">
                Please provide a valid city.
            </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Code postal</label>
              <input type="text" name="code_postal" onChange={this.handleInputChange} placeholder="44000" className="form-control" id="inputCity" required />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Type d'artisanat</label>
              <select id="inputState" name="metier_id" onChange={this.handleInputChange} className="form-control" required>
                {
                  this.state.listMetier.length > 0 &&
                  this.state.listMetier.map((metier, index) => <option key={index} value={parseInt(metier.id)}>{metier.metier_type}</option>)
                }
              </select>
            </div>
          </div>



          <div className="form-check form-check-inline">
            <input name="" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Vente sur place</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Fabrication in situ</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox3">Réparation</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox4">initiation / stage / formation</label>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">laisser un avis</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" htmlFor="exampleRadios1">
              1 etoile
            </label>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label className="form-check-label " htmlFor="exampleRadios2">
              2 etoiles
            </label>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
            <label className="form-check-label" htmlFor="exampleRadios3">
              3 etoiles
            </label>
          </div>
          <button id='submitButton' onClick={this.submitForm} className="btn btn-primary" type="submit">Enregistrement d'un nouvel artisan</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    initialyseAvis: (data) => {
      dispatch({ type: 'INITIALYSEAVIS', payload: data })
    },
    initialyse: (data) => {
      dispatch({ type: 'INITIALYSE', payload: data })
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormArtisan);