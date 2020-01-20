import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';


class ButtonsList extends React.Component {
  constructor() {
    super()
  }

  render() {
    let tab = this.props.data
    // console.log(tab.map(mapi=>console.log(mapi.lat)))
    let newTab = [...new Set(this.props.data.map((specialty, index) => { return (specialty.metier_id) }))]
    return (
      <>
        {newTab.map(metier => <Button metier={metier} />)}
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