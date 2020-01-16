import React from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import axios from 'axios';
// import Button from '../Button/Button';

class Setting extends React.Component {
  constructor() {
    super()
    this.state={
      testnom:''
    }
  }


  handleClick = () => {
    this.props.changeName(this.state.testnom)
    // console.log(`test changeName ${this.testnom}`);
    // console.log(this.testnom)
  }

  handleClickTheme = () => {
    this.props.changeTheme()
    console.log('changetheme')
  }
  clickapi = () => {
    console.log('testapi')
    axios.get('http://localhost:8000/artisans')
      .then(response => { console.log(response.data) })
  }

  render() {

    return (
      <>
        <Navbar />
        <p>Setting</p>
        <p>{this.props.color}</p>
        <p>{this.props.truc}</p>
        <button onClick={this.handleClickTheme}>test change theme</button>
        <button onClick={this.clickapi}>API</button>
        <br />
        
        <input type="text" name="name" id='test' value={this.state.testnom} onChange={(e) => {return this.setState({testnom:e.target.value  }) }} />
        <button onClick={this.handleClick} >submit name</button>
        
      </>
    )
  };
}

const mapStateToProps = state => {
  return {
    color: state.color,
    truc: state.name,
    theme: state.theme

  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeName: (name) => {
      dispatch({ type: 'CHANGENAME', payload: name })
    },
    changeTheme: () => {
      dispatch({ type: 'CHANGETHEME' })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Setting);