import React from 'react';
import Navbar from '../Navbar/Navbar';
import { render } from 'react-dom';
import axios from 'axios';

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
      metier_id: "1"
    }
  }



  submitForm = (event) => {
    const { entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, photo_url1, photo_url2, photo_url3, ville, code_postal, metier_id } = this.state
    const form = { entreprise_nom, nom_artisan, prenom_artisan, site_internet, numero, adresse, ville, code_postal, metier_id }
    event.preventDefault();
    console.log(this.state)
    axios.post('http://localhost:8000/artisans', form)
      .then(() => console.log('ok'))
      .catch(err => {
        console.error(err);
      });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    return (
      <>
        <Navbar />
        <h1>Form Artisan</h1>
        <form className="needs-validation" noValidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltip01">Nom de l'entreprise</label>
              <input type="text" name="entreprise_nom" className="form-control" onChange={this.handleInputChange}
                id="validationTooltip01" placeholder="First name" required />
              <div className="valid-tooltip">
                Looks good!
      </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltip02">Nom de l'artisan</label>
              <input type="text" name="nom_artisan" onChange={this.handleInputChange} className="form-control" id="validationTooltip02" placeholder="Last name" required />
              <div className="valid-tooltip">
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltip02">Prenom de l'artisan</label>
              <input type="text" name="prenom_artisan" onChange={this.handleInputChange} className="form-control" id="validationTooltipprenom" placeholder="Last name" required />
              <div className="valid-tooltip">
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationTooltipUsername">Site internet</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="validationTooltipUsernamePrepend">www</span>
                </div>
                <input type="url" name="site_internet" onChange={this.handleInputChange} className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
                <div className="invalid-tooltip">
                  Please choose a unique and valid username.
        </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="numero">numero</label>
            <input type="text" name="numero" onChange={this.handleInputChange} className="col-md-3 mb-3" id="numero" placeholder="1234" />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Adresse</label>
            <input type="text" name="adresse" onChange={this.handleInputChange} className="form-control" id="inputAddress" placeholder="quelques part" />
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationTooltip03">Ville</label>
              <input type="text" name="ville" onChange={this.handleInputChange} className="form-control" id="validationTooltip03" placeholder="Ville" required />
              <div className="invalid-tooltip">
                Please provide a valid city.
            </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Code postal</label>
              <input type="text" name="code_postal" onChange={this.handleInputChange} className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Type d'artisanat</label>
              <select id="inputState" name="metier_id" onChange={this.handleInputChange} className="form-control">
                <option>1</option>
                <option>Modiste</option>
                <option>Bottier</option>
                <option defaultValue >Bijoutier</option>
                <option>Maroquinnier</option>
                <option>Tailleur</option>
                <option>Boutique</option>
              </select>
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
          </div>

          <button id='submitButton' onClick={this.submitForm} className="btn btn-primary" type="submit">Enregistrement d'un nouvel artisan</button>

        </form>
      </>
    )
  }
}

export default FormArtisan;