import React from 'react'; import { connect } from 'react-redux';


class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.id,
      metier: this.props.metier
    }
  }

  handleclick = () => {
    console.log('test')
    console.log(this.state.value)
    this.props.metierIdChoose(this.state.value)
  }

  render() {
    console.log(this.state.metier)
    return (
      <>
        <button type="button" value={this.props.id} onClick={this.handleclick} className="btn btn-outline-success">{this.props.metier}</button>
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