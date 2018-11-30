

import ViewStats from '../Comp/ViewStats';
//import AddStats
import React, { Component } from 'react';
import NavBar from '../Comp/NavBar';
import AddStats from '../Comp/AddStats';

class Home extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <AddStats/>
            <ViewStats/>
           
        </div>
    );
  }
}

export default Home;
