import React, { Component } from 'react';


class StatsRow extends Component {




render() {

    return(
        <div>
             {this.props.data.Date}   
             {this.props.data.Burned}  


          
        </div>
    )

}


}
export default StatsRow