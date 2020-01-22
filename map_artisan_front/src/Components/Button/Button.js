import React from 'react'; import { connect } from 'react-redux';


class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.id,
      metier: props.metier
    }
  }

  handleclick = (id) => {
    console.log('test')
    console.log(this.state.value)
    this.props.metierIdChoose(this.state.value)
  }

  render() {
    console.log(this.state.metier)
    return (
      <>
        <button type="button" value={this.state.value} onClick={this.handleclick} className="btn btn-outline-success">{this.state.metier}</button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataMetier: state.dataMetier
  }
}
const mapDispatchToProps = dispatch => {
  return {
    metierIdChoose: (data) => {
      dispatch({ type: 'METIERIDCHOOSE', payload: data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);