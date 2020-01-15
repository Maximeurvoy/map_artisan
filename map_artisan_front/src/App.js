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



function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/formartisan' component={FormArtisan}></Route>
          <Route path='/setting' component={Setting}></Route>
        </Switch>
    </div>
  );
}

export default App;
