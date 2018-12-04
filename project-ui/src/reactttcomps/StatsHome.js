import React, { Component } from 'react';
import StatsTable from './StatsTable';

class StatsHome extends Component {
    state = {
        stats : []

    }

    
componentDidMount = async () => {
    await fetch('http://localhost:4000/stats')
  .then(function(response) {
    return response.json();
  })
  //In this.setState we are assigning stats to myJson data
  .then((myJson) => {
    this.setState({stats : myJson});  
    console.log('all stats' , this.state.stats)
  });
}

render() {

    return(
        <div>
            This is stats HOME
            {/* taking the "data" and setting it to a NEW object this.state.stats to be passed around and used by children within the StatsTable Component */}
            <StatsTable data={this.state.stats}/>  
            
        </div>
    )

}


}
export default StatsHome