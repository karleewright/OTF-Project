import React, { Component } from 'react';
import StatsRow from './StatsRow'

class StatsTable extends Component {




render() {
    //by calling const stats we are taking the stats from our returned {stats : myJson} of the API 
    //const stats gets the data from our API call, the properties of that data, maps it to the StatsRow component where it will display and assigns data now = to {mappedstat}
    const stats = this.props.data.map(results => <StatsRow data={results}/>)
        console.log (stats)
    
    return(
        <div>
           {stats}
        </div>
    )

}


}
export default StatsTable