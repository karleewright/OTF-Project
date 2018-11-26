import React, { Component } from 'react';
import Login from './components/login';
import Home from './components/home';
import AddStat from './components/addstat';
import UpdateStat from './components/updatestat';
import DeleteStat from './components/deletestat';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Login></Login>
        <Home></Home>
        <AddStat></AddStat>
        <UpdateStat></UpdateStat>
        <DeleteStat></DeleteStat>

        </header>
      </div>
    );
  }
}

export default App;
