import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';


class ButtonsList extends React.Component {


  render() {
    let newTab = [...new Set(this.props.data.map((specialty, index) => { return (specialty.metier_id) }))]
    return (
      <>
        {newTab.map((metier,index) => <Button metier={metier} key={index} />)}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    specialtys: state.specialtys,
    truc: state.name,
    data: state.data
  }
}

export default connect(mapStateToProps)(ButtonsList);