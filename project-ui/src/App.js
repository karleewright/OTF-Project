import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pgs/Home';
import NavbarPage from './components/navbar';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
       <Home/>
       <Route exact path = '/' Component={Home}/>
        
      </div>
    </Router>
    );
  }
}

export default App;
