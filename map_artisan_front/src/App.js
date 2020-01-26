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
import Avis from './Components/Avis/Avis';

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

    axios.get('http://localhost:8000/avis')
      .then(response => this.props.initialyseAvis(response.data))

    axios.get('http://localhost:8000/metiers')
      .then(response => { this.props.initialyseMetier(response.data) })

  }

  render() {
    return (
      <div className={this.props.theme ? "App" : "AppDark"}>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/formartisan' component={FormArtisan}></Route>
          <Route path='/setting' component={Setting}></Route>
          <Route path='/listeartisan' component={ListeArtisans}></Route>
          <Route path='/avis' component={Avis}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
    data: state.data,
    metier_idChoose: state.metier_idChoose,
    dataAvis: state.dataAvis,
    dataMetier: state.dataMetier
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initialyse: (data) => {
      dispatch({ type: 'INITIALYSE', payload: data })
    },
    initialyseAvis: (data) => {
      dispatch({ type: 'INITIALYSEAVIS', payload: data })
    },
    initialyseMetier: (data) => {
      dispatch({ type: 'INITIALYSEMETIER', payload: data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


