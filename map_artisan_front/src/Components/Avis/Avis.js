import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Avis.css'

class Avis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentaire: '',
      note: '',
      artisan_id: ''
    }
  }

  submitForm = (event) => {
    const { commentaire, note, artisan_id } = this.state
    const form = { commentaire, note, artisan_id }

    console.log(this.state)
    axios.post('http://localhost:8000/avis', form)
      .then(() => console.log('ok'))
      .catch(err => {
        console.error(err);
      });
    axios.get('http://localhost:8000/avis')
    .then(response => { this.props.initialyseAvis(response.data) })
    // event.preventDefault()
    this.props.history.push('/')

  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    }); console.log(this.state)
  }
  handlereturn =()=>{
    this.props.history.push('/')
  }

   componentDidMount() {
    axios.get('http://localhost:8000/avis')
      .then(response => { this.props.initialyseAvis(response.data) })
  }


  render() {
    console.log(this.props.data[this.props.data.length - 1])
    console.log(this.props.dataAvis)

    return (
      <>
        <Navbar />
        <h1>laisser un  avis</h1>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Nom de l'artisan</label>
          </div>
          <select className="custom-select" name='artisan_id' id="inputGroupSelect01"  defaultValue={this.props.data[this.props.data.length -1].id} onChange={this.handleInputChange} >
            {this.props.data.map((artisan, index) => <option key={index}  value={artisan.id}>{artisan.entreprise_nom}</option>)}
          </select>
        </div>

        <form className="needs-validation" noValidate>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Votre commentaire</label>
            <textarea className="form-control" name='commentaire' id="exampleFormControlTextarea1" rows="3" onChange={this.handleInputChange}></textarea>
          </div>
          <h3>Notes</h3>

          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="note" id="exampleRadios1" value="1" onChange={this.handleInputChange} />
            <label className="form-check-label" htmlFor="exampleRadios1">
              1
            </label>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="note" id="exampleRadios2" value="2" onChange={this.handleInputChange} />
            <label className="form-check-label" htmlFor="exampleRadios2">
              2
            </label>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="note" id="exampleRadios3" value="3" onChange={this.handleInputChange} />
            <label className="form-check-label" htmlFor="exampleRadios3">
              3
            </label>
          </div>
          <div>
            <button id='submitButton' onClick={this.submitForm} className="btn btn-primary" type="submit" 
            disabled={!this.state.commentaire || !this.state.artisan_id || !this.state.note ? true :false}>Valider l'avis</button>
            <button id='Button' onClick={this.handlereturn} className="btn btn-primary" type="submit" >ne pas laisser d'avis retour accueil</button>

          </div>
        </form>
<h3> Les 10 derniers avis laissés</h3>
        {this.props.dataAvis.slice(this.props.dataAvis.length -10)
        .map((avis, index) => <li className='lastAvis' key={index}> <h4> {avis.entreprise_nom}</h4><p>{avis.commentaire} <span>note {avis.note}/3</span></p></li>).reverse()}

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataAvis: state.dataAvis,
    data: state.data
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

export default connect(mapStateToProps, mapDispatchToProps)(Avis);