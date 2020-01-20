import React from 'react';
import './App.css';
import FormArtisan from './Components/FormArtisan/FormArtisan';
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Setting from './Components/Setting/Setting';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import axios from 'axios';
import ListeArtisans from './Components/ListeArtisans/ListeArtisans';

class App extends React.Component {

  // getArtisans = async () => {
  //   let data;
  //   await axios.get('http://localhost:8000/artisans')
  //     .then(response => { data = response.data })
  //   return data
  // }

  componentDidMount() {
    axios.get('http://localhost:8000/artisans')
      .then(response => { this.props.initialyse(response.data) })
  }

  render() {
    return (
      <div className={this.props.theme ? "App" : "AppDark"}>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/formartisan' component={FormArtisan}></Route>
          <Route path='/setting' component={Setting}></Route>
          <Route path='/listeartisan' component={ListeArtisans}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
    data: state.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initialyse: (data) => {
      dispatch({ type: 'INITIALYSE', payload: data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

