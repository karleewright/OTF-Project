//Functional Component only or stateful because it changes over time? 

//Imports into StatsTable as a functional component


//onsubmit()forloop to add a counter on checkbox #s in code. Set id in checkbox to be from DB generated ID?


import React, { Component } from 'react';


class StatsRow extends Component {




render() {

    return(
        <div>
             {this.props.data.Date}   || 
             {this.props.data.Burned}  ||
             {this.props.data.Low}  ||
             {this.props.data.Med}  ||
             {this.props.data.High}  ||
             {this.props.data.Extreme}  ||

          
        </div>
    )

}


}
export default StatsRow