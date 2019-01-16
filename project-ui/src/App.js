import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomeTemplate from '../src/Components/Home/HomeTemplate';
import NavBarMenu from './Components/Home/NavBarMenu';
import About from './Components/Home/About';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
     
        <NavBarMenu />
        <Route exact path="/" component={HomeTemplate}/>
        <Route path="/about" component={About}/>
       
      </div>
    </Router>
      
    );
  }
}

export default App;
