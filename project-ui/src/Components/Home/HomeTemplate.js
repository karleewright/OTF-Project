// /*This is my Main Layout Page*/
//In this class, we can control these Components: NavBar StatsTable


import React, { Component } from "react";

import NavBar from "../Home/NavBar";
import StatsTable from "../StatsTable/StatsTable";


class Home extends Component {
  state = {
    data: []
  };



  render() {
    return (
      <div>
       This is Home 

        <NavBar />
        <StatsTable/>
      
      </div>
    );
  }
}
export default Home;
