
import ModalPage from "../Modal/ModalPage";
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import EditModalPage from "../Modal/EditModalPage";


class StatsTable extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      isLoaded: true
    };
  }

  componentDidMount() {
    this.dataGrabber()
    }



  
  dataGrabber  = async ( )=> {
    const url = "http://localhost:4000/stats";
    await fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
      });
  }


  //Delete API Call 
  deleteStat = async event => {
    const url = "http://localhost:4000/stats/id/" + event.target.value;
    await fetch(url, {
      method: "DELETE"
    }).then(res => res.json()).then(()=>this.dataGrabber());
  };




  //JSX Rendering of Columns && Rows, Edit Modal Button on RowID, Delete Button for target value
  render() {
  
    return (
      <React.Fragment>
        <ModalPage dataGrabber={this.dataGrabber}/>
        <ReactTable
          data={this.state.data}
          columns={[
            {columns: [
                {
                  Header: "Date",
                  accessor: "Date",
                  sortable: true,
                  filterable: true
                }]
            },

            {columns: [
                {
                  Header: "Calories Burned",
                  accessor: "Burned",
                  sortable: true,
                  filterable: true,
                  width: 100,
                  maxWidth: 100,
                  minWidth: 100
                }]
            },

            {Header: "Ponts Earned",
              columns: [
                {
                  Header: "Low",
                  accessor: "Low",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "Medium",
                  accessor: "Medium",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "High",
                  accessor: "High",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "Critical",
                  accessor: "Critical",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "Extreme",
                  accessor: "Extreme",
                  sortable: false,
                  filterable: false
                }]
            },

            {Header: "Heart Rate",
              columns: [
                {
                  Header: "Average",
                  accessor: "AvgHR",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "Peak HeartRate",
                  accessor: "PeakHR",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "Avg. % Max HR",
                  accessor: "AvgPercMaxHR",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "MaxHR",
                  accessor: "MaxHR",
                  sortable: false,
                  filterable: false
                }]
            },

            {Header: "Actions",
              columns: [
                {
                  Header: "Edit",
                  sortable: false,
                  fitlerable: false,
                  width: 150,
                  maxWidth: 100,
                  minWidth: 100,
                  accessor: "_id",
                  Cell: props => {
                    return <EditModalPage
                    rowId= {props.value} 
                    dataGrabber={this.dataGrabber}
                   />
                  }},

                  
    
                
                 {Header: "Delete",
                  sortable: false,
                  fitlerable: false,
                  width: 150,
                  maxWidth: 100,
                  minWidth: 100,
                  accessor: "_id",
                  Cell: props => {
                    return (
                    <button type="button" 
                      onClick={this.deleteStat}
                      value={props.value}
                    className="btn btn-danger">Delete</button>)}
                  }]}
                    ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                  br />
                </React.Fragment>
    );
  }
}

export default StatsTable;