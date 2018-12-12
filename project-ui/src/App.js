import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomeTemplate from '../src/Components/Home/HomeTemplate';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
       <HomeTemplate/>
       <Route exact path = '/' Component={HomeTemplate}/>
      </div>
    </Router>
    );
  }
}

export default App;
