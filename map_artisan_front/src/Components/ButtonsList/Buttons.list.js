import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';


class ButtonsList extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        {this.props.data.map((specialty, index) => {
          return (
            <Button specialty={specialty.metier_id} key={index} />)
        })}
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