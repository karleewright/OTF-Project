
// https://medium.com/front-end-hacking/tested-react-lets-build-a-data-table-a76aa100d23f


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

  dataGrabber =( )=> {
    const url = "http://localhost:4000/stats";
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  deleteStat = async event => {
    // console.log(event.target.value);
    const url = "http://localhost:4000/stats/id/" + event.target.value;
    await fetch(url, {
      method: "DELETE"
    }).then(res => res.json());
  };

  
//allows for the put of new data 

  // editStats = async event => {
  //   console.log("edit Statsssss Clicked");
  //   const url = "http://localhost:4000/stats/id/" + event.target.value;
  //   fetch(url, {
  //     method: "PUT",
  //     body: JSON.stringify(this.state.data)
  //   })
  //     .then(res => res.json())
  //     .then(response => console.log("Success:", JSON.stringify(response)))
  //     .catch(error => console.error("Error:", error));
  //     this.dataGrabber()
  // };

  


  render() {
    

    return (
      <React.Fragment>
        <ModalPage />
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