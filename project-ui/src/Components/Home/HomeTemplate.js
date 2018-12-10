// /*This is my Main Layout Page*/

// //import {API Object} folder

import React, { Component } from "react";

import NavBar from "../Home/NavBar";
import StatsTable from "../StatsTable/StatsTable";


//In this class, we can control these states:
class Home extends Component {
  state = {
    data: []

    //modalIsOpen : false
    //statsLoaded : true for my GET
  };

  // componentDidMount = async () => {
  //   await fetch("http://localhost:4000/stats")
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     //In this.setState we are assigning stats to myJson data
  //     .then(myJson => {
  //       this.setState({ data: myJson });
  //       console.log("all stats", this.state.data);
  //     });
  // };

  render() {
    return (
      <div>
       This is Home 

        <NavBar />
        <StatsTable/>
        {/* <ModalControl /> */}
        {/* <ViewStats /> data={this.state.data} */}
      </div>
    );
  }
}
export default Home;
