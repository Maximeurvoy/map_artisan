import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import axios from 'axios';


class ButtonsList extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:8000/metiers')
      .then(response => { this.props.initialyseMetier(response.data) })

  }

  render() {
    console.log(this.props.dataMetier)
    let newTab = [...new Set(this.props.dataMetier.map((specialty, index) => { return (specialty) }))]
    return (
      <>
        {newTab.map((metier, index) => <Button metier={metier.metier_type} id={metier.id} key={index} />)}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    specialtys: state.specialtys,
    truc: state.name,
    data: state.data,
    dataMetier: state.dataMetier
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initialyseMetier: (data) => {
      dispatch({ type: 'INITIALYSEMETIER', payload: data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsList);


