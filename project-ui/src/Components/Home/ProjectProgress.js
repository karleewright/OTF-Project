import React from "react";
import { render } from "react-dom";
// import { makeData, Logo, Tips } from "./Utils";
import ReactTable from "react-table";
import "react-table/react-table.css";

class ProjectProgress extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.renderEditable = this.renderEditable.bind(this);
  }


  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          className= "projectprogress"
          columns={[
            {
              Header: "Feature to Add",
              accessor: "feature",
              Cell: this.renderEditable
            },
            {
              Header: "Due Date",
              accessor: "date",
              Cell: this.renderEditable
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

export default ProjectProgress
