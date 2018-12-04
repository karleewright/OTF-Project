
import React, { Component } from 'react';
// import ViewStats from '../Comp/ViewStats'; 
// import StatsTable from '../Comp/StatsTable';
import NavBar from '../Comp/NavBar';
import AddStats from '../Comp/AddStats'; 


import StatsHome from '../reactttcomps/StatsHome';
class Home extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <AddStats/>
            <StatsHome/>
            {/* <ViewStats/>
            <StatsTable/> */}
        </div>
    );
  }
}

export default Home;
