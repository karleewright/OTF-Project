// /*This is my Main Layout Page*/
//In this class, we can control these Components: NavBar StatsTable


import React, { Component } from "react";
import StatsTable from "../StatsTable/StatsTable";


class Home extends Component {
  state = {
    data: []
  };


  render() {
    return (
      <div>
        <StatsTable/>
      </div>
    );
  }
}
export default Home;
