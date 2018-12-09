// https://medium.com/front-end-hacking/tested-react-lets-build-a-data-table-a76aa100d23f

// import {API Object}



import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

/* What data do you want to manipulate
            
            NOTE If your data has a field/key with a dot (.) you will need to supply a custom accessor.

            accessor: 'propertyName', // or Accessor eg. (row) => row.propertyName (see "Accessors" section for more details)

            id: 'myProperty', // Conditional - A unique ID is required if the accessor is not a string or if you would like to override the column name used in server-side calls
            
*/
class StatsTable extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            accessor: {}
        
          }





    }
    
    
    componentDidMount = async () => {
        await fetch('http://localhost:4000/stats')
      .then(function(response) {
        return response.json();
      })
      //In this.setState we are assigning stats to myJson data
      .then((myJson) => {
        this.setState({data : myJson});  
        console.log('all stats' , this.state.data)
      });
    }
    
    render() {
      const { data } = this.state;
      return (
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Date",
                columns: [
                  {
                    Header: "Date",
                    id: "Date",
                    accessor: d => d.lastName
                  }
                ]
              },


              {
                Header: "Calories Burned",
                columns: [
                  {
                    Header: "Calories Burned",
                    accessor: "Burned"
                  },
                ]
              },


              {
                Header: 'Ponts Earned',
                columns: [
                  {
                    Header: "Low",
                    accessor: "Low"
                  },
                  {
                    Header: "Med",
                    accessor: "High"
                  },
                  {
                    Header: "High",
                    accessor: "High"
                  },
                  {
                    Header: "Critical",
                    accessor: "Critical"
                  },
                  {
                    Header: "Extreme",
                    accessor: "Extreme"
                  },
                ]
              },

              {
                Header: 'Heart Rate',
                columns: [
                  {
                    Header: "Average",
                    accessor: "AvgHR"
                  },
                  {
                    Header: "Peak HeartRate",
                    accessor: "PeakHR"
                  },
                  {
                    Header: "Avg. % Max HR",
                    accessor: "AvgPercMaxHR"
                  },
                  {
                    Header: "MaxHR",
                    accessor: "MaxHR"
                  },
                ]
              },



            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          <br />
      
       
        </div>
      );
    }
  }
  



  export default StatsTable;






    //What functions to manipulate the data?

    //for loop
    // Map


    //API UPDATES -MODAL LOAD
    //BUTTON- onClickDelete will update by table id cell/row/column?
    //BUTTON- onClickUpdate will update by table id cell/row/column?
    //BUTTON- onClickPost will update by table id cell/row/columnn?



    
    


//<ViewStats data={this.state.data}/> 

              
//* taking the "data" and setting it to a NEW object this.state.stats to be passed around and used by children within the StatsTable Component */

//<ViewStats data={this.state.stats}/>   











    // constructor(){
    // super();
    // this.state = {
    //         Date: " ",
    //         Burned: " ",
    //         Low: " ",
    //         Med: " ",
    //         High: " ",
    //         Critical: " ",
    //         Extreme: " ",
    //         AvgHR: " ",
    //         PeakHR: " ",
    //         AvgPercMaxHR: " ",
    //         MaxHR: " ",

    //         loaded : false,


    //         data : []
    //         //modalIsOpen : false
    //         //statsLoaded : true for my GET
    //         //Add StatButton : 
    //         //Delete Stat Button


    //     };
    //     //default loaded is set to false can it ever be set to open? This sets state for the props so when the stats load we need to update this to true for it to work?
            
    //     // this.handleClick = this.handleClick.bind(this) //when I say handleClick I want you to think of this class, and .bind(what?- this)
    // }

    
    // }

    
// import React, { Component } from 'react';
// import StatsRow from './StatsRow'
// // import DeleteStats from './DeleteStats';
// // import UpdateStats from './UpdateStats';
// // import ViewStats from './ViewStats';
// // import AddStats from './AddStats';

// import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

// class MyStats extends Component {
//    



        //data_panel = {
//       columns : this.state.columns,
//       rows : this.state.rows,

//       id : this.state.id

//       label: 
//       field:
//       sort: 


//    }


  

 
// StatsTable = (props) => {
//   const data_panel = {
//     columns: [
//       {
//         'label': <MDBInput label=" Select " type="checkbox" id="checkbox5" />,
//         'field': 'check',
//         'sort': 'asc'
//       },
//       {
//         'label': 'Date',
//         'field': 'Date',
//         'sort': 'asc'
//       },
//       {
//         'label': 'Calories Burned',
//         'field': 'Burned',
//         'sort': 'asc'
//       },
//       {
//         'label': 'Minutes in Low',
//         'field': 'Low',
//         'sort': 'asc'
//       },
//       {
//         'label': 'Minutes in Medium',
//         'field': 'Medium',
//         'sort': 'asc'
//       },
//       {
//         'label': 'Minutes in High',
//         'field': 'High',
//         'sort': 'asc'
//       },
//       {
//         'label': 'Minutes in Critical',
//         'field': 'Critical',
//         'sort': 'asc'
//       },
      
//       {
//         'label': 'Minutes in Extreme',
//         'field': 'Extreme',
//         'sort': 'asc'
//       },
    
//       {
//         'label': 'AverageHR',
//         'field': 'AvgHR',
//         'sort': 'asc'
//       },
//       {
//         'label': 'PeakHR',
//         'field': 'PeakHR',
//         'sort': 'asc'
//       },
//       {
//         'label': 'Avg Perc MaxHR',
//         'field': 'AvgPercMaxHR',
//         'sort': 'asc'
//       },
//       {
//         'label': 'MaxHR',
//         'field': 'MaxHR',
//         'sort': 'asc'
//       }],
    
//     //How to account for checkboxs as dataset gets bigger? Start at checkbox1 and run a loop function to add checkbox# for every entry added? Set id= db generated ID?

//     rows: [
//       {
//         'check': <MDBInput label=" " type="checkbox" id="checkbox6" />,
//         'Date': 'Date',
//         'Burned': 'Calories Burned #',
//         'Low': 'Minutes in Low #',
//         'Medium': 'Minutes in Medium #',
//         'High': 'Minutes in High #',
//         'Critical': 'Minutes in Critical #',
//         'Extreme': 'Minutes in Extreme #',
//         'AvgHR': 'AvgHR #',
//         'PeakHR': 'PeakHR #',
//         'AvgPercMaxHR': 'AvgPercMaxHR #',
//         'MaxHR': 'MaxHR #'
//       }]
//   };


//     render()
//     //by calling const stats we are taking the stats from our returned {stats : myJson} of the API 
//     //const stats gets the data from our API call, the properties of that data, maps it to the StatsRow component where it will display and assigns data now = to {mappedstat}
//     const stats = this.props.data.map(results => <StatsRow data={results}/>)
//         console.log (stats)
  


//     return(
//     <MDBCard narrow>
//       <MDBCardHeader className="view view-cascade gradient-card-header orange d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        
        
//         <a href="#" className="white-text mx-3"  > Karlees Workout Totals   </a> 
//         <div>

//           <MDBBtn outline rounded size="sm" color="white" className="px-2">
//             <i className="fa fa-edit mt-0"></i>
//           </MDBBtn>

//           <MDBBtn outline rounded size="sm" color="white" className="px-2">
//             <i className="fa fa-remove mt-0"></i>
//           </MDBBtn>

         

//         </div>

//       </MDBCardHeader>
      
//       <MDBCardBody cascade>
//         <MDBTable btn fixed>
//           <MDBTableHead columns={data_panel.columns} />
//           <MDBTableBody rows={data_panel.rows} />
//         </MDBTable>
//       </MDBCardBody>
//     </MDBCard>
// );
// }
// }




// export default MyStats