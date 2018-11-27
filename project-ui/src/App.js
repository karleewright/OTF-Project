import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/login';
import View from './components/view';
import ModalPage from './components/modal';
import AddStat from './components/addstat'; 
import UpdateStat from './components/updatestat';
import DeleteStat from './components/deletestat';
import NavbarPage from './components/navbar';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      <NavbarPage/>
      {/* <ModalPage></ModalPage> */}
        <Route exact path = '/' Component={Login}/>
        <Route exact path = '/viewstats' Component={View}/>
        <Route exact path = '/addstats' Component={AddStat}/>
        <Route exact path = '/updatestats' Component={UpdateStat}/>
        <Route exact path = '/deletestat' Component={DeleteStat}/>
      </div>
    </Router>
    );
  }
}

export default App;
