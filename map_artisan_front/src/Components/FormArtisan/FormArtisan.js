import React from 'react';
import Navbar from '../Navbar/Navbar';

const FormArtisan = () => {
  return (
    <>
      <Navbar />
      <h1>Form Artisan</h1>

      <form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">Nom de l'entreprise</label>
            <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" required />
            <div className="valid-tooltip">
              Looks good!
      </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Nom / Prenom de l'artisan</label>
            <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" required />
            <div className="valid-tooltip">
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltipUsername">Site internet</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="validationTooltipUsernamePrepend">www</span>
              </div>
              <input type="url" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
        </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="numero">numero</label>
          <input type="text" className="col-md-3 mb-3" id="numero" placeholder="1234" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Adresse</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="quelques part" />
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">Ville</label>
            <input type="text" className="form-control" id="validationTooltip03" placeholder="Ville" required />
            <div className="invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Code postal</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>




          <div className="form-group col-md-4">
            <label htmlFor="inputState">Type d'artisanat</label>
            <select id="inputState" className="form-control">
              <option>Autre ...</option>
              <option>Modiste</option>
              <option>Bottier</option>
              <option defaultValue >Bijoutier</option>
              <option>Maroquinnier</option>
              <option>Tailleur</option>
              <option>Boutique</option>
            </select>

          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
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

        <button className="btn btn-primary" type="submit">Enregistrement d'un nouvel artisan</button>

      </form>
    </>
  )
};

export default FormArtisan;