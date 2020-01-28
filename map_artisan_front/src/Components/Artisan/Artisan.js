import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class Avis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artisan: []
    }
  }
  async componentDidMount() {


    console.log(this.props.match.params.id)
    console.log(this.props.data)
    let idtest = parseInt(this.props.match.params.id)
    let data = this.props.data
    // console.log(data[1].id)
    console.log(parseInt(idtest))

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === idtest) {
        this.setState({ artisan: [data[i]] })

        console.log(data[i])
        console.log('pass')
        break
      } else {
        console.log('reject')
      }
    }
  }



  render() {
    let { id } = this.props.match.params.id
    return (
      <>
        <Navbar />
        {this.state.artisan.map(artisan => {
          return (<>
            <h1>{artisan.entreprise_nom}</h1>
            <p>{artisan.metier_type}</p>
            <p>Enseigne tenue par : {artisan.prenom_artisan} {artisan.nom_artisan} </p>

            <p>Visiter son site :</p>
            <a href={artisan.site_internet}>{artisan.site_internet}</a>
            <p>lui rendre visite</p>
            <p>{artisan.numero} {artisan.adresse} {artisan.ville}</p>
            <p>images des créations à venir à venir</p>
            <h3>Commentaires</h3>
            {artisan.commentaire.map(comment=><li>{comment}</li>)}
            </>
          )
        }
        )}


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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avis);