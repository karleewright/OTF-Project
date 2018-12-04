//seperate Componenent that feeds into HOME

//Do I need to have seperate components created and then called here???
        //StatsCategoryRow will import into ViewStats
        //StatsRow will import into ViewStats


// StatsTable will be connected with these API CALLS and COMPONENTSs:
// Import AddStats COMP [post], 
// Import DeleteStats COMP [del], 
// Import UpdateStats COMP [put] and 
// Import ViewStats COMP[get] 


import React from 'react';
//import StatsRow?
//import StatsCategory Row?
import DeleteStats from './DeleteStats';
import UpdateStats from './UpdateStats';
import ViewStats from './ViewStats';
import AddStats from './AddStats';

import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

//Make this a constructor class with super() for it to pass down props to other 2 functional components of StatsRow and StatsCategoryRow?
// class StatsTable extends React.Component { 
// constructor() {
//   super();

//   this.state= {

//   }

// }

 const StatsTable = (props) => {
  const data_panel = {
    columns: [
      {
        'label': <MDBInput label=" Select " type="checkbox" id="checkbox5" />,
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'Date',
        'field': 'Date',
        'sort': 'asc'
      },
      {
        'label': 'Calories Burned',
        'field': 'Burned',
        'sort': 'asc'
      },
      {
        'label': 'Minutes in Low',
        'field': 'Low',
        'sort': 'asc'
      },
      {
        'label': 'Minutes in Medium',
        'field': 'Medium',
        'sort': 'asc'
      },
      {
        'label': 'Minutes in High',
        'field': 'High',
        'sort': 'asc'
      },
      {
        'label': 'Minutes in Critical',
        'field': 'Critical',
        'sort': 'asc'
      },
      
      {
        'label': 'Minutes in Extreme',
        'field': 'Extreme',
        'sort': 'asc'
      },
    
      {
        'label': 'AverageHR',
        'field': 'AvgHR',
        'sort': 'asc'
      },
      {
        'label': 'PeakHR',
        'field': 'PeakHR',
        'sort': 'asc'
      },
      {
        'label': 'Avg Perc MaxHR',
        'field': 'AvgPercMaxHR',
        'sort': 'asc'
      },
      {
        'label': 'MaxHR',
        'field': 'MaxHR',
        'sort': 'asc'
      }


    ],
    
    //How to account for checkboxs as dataset gets bigger? Start at checkbox1 and run a loop function to add checkbox# for every entry added? Set id= db generated ID?

    rows: [
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox6" />,
        'Date': 'Date',
        'Burned': 'Calories Burned #',
        'Low': 'Minutes in Low #',
        'Medium': 'Minutes in Medium #',
        'High': 'Minutes in High #',
        'Critical': 'Minutes in Critical #',
        'Extreme': 'Minutes in Extreme #',
        'AvgHR': 'AvgHR #',
        'PeakHR': 'PeakHR #',
        'AvgPercMaxHR': 'AvgPercMaxHR #',
        'MaxHR': 'MaxHR #'
      }
      
    ]
  };


  //DISPLAY : center and bold the "Karlees Workout Totals in CSS folder

  return(
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header orange d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        
        
        <a href="#" className="white-text mx-3"  > Karlees Workout Totals   </a> 
        <div>

          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-edit mt-0"></i>
          </MDBBtn>

          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-remove mt-0"></i>
          </MDBBtn>

         

        </div>

      </MDBCardHeader>
      
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default StatsTable;


