import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import axios from 'axios';


class ButtonsList extends React.Component {

  componentDidMount() {
    console.log(this.props.dataMetier)

  }

  render() {
    // let newTab = [...new Set(this.props.dataMetier.map((specialty, index) => { return (specialty)}))]
    // console.log(newTab)
    return (
      <>
        {this.props.dataMetier.map((metier, index) => <Button metier={metier.metier_type} id={metier.id}  />)}
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

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsList);


