import React from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Col
} from "mdbreact";
import './ModalCSS.css';

class EditModalPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statData: [],
      modal14: false
    };
  }

  
  //getting data and assigning it to the rowID where we only need first index item pulled of that data
  componentDidMount() {
    const url = "http://localhost:4000/stats/id/" + this.props.rowId;
    fetch(url, 
      {method: "GET"})
      .then(res => res.json())
      .then(data => {
        this.setState({ statData: data[0] });
      });
  }

  //onClick takes an event and will give us back this statData that is set above
  onClick(event) {
  return this.state.statData
  }

  //PUT API Call
  editStats = async event => {
    const url = "http://localhost:4000/stats/id/" + this.props.rowId;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(this.state.statData)
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error))
      .then (()=>this.toggle(14)).then(()=>this.props.dataGrabber()); //add stat this.toggle
  };



  //State Change For Modal
  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }




  //JSX React Render
  render() {
    // console.log(this.state.statData);
    return (
      <div>
        <Container>
          <Button className= "editbtn" color="blue" 
          onClick={() => this.toggle(14)}>
          Edit
          </Button>
          <Modal
            isOpen={this.state.modal14}
            toggle={() => this.toggle(14)}
            centered>
          <ModalHeader toggle={() => this.toggle(14)}>
          Edit Stats in Database
          </ModalHeader>
          
          {/*inline CSS Below */}
          <ModalBody>
              <form>
                <Row>
                  <Col>
                    Date:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="date"
                      defaultValue={this.state.statData.Date}
                      onChange=
                      {event => this.setState({
                        statData: { ...this.state.statData, Date: event.target.value }
                        })}
                      name="date"/>
                    <br />


                    Burned:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="number"
                      defaultValue={this.state.statData.Burned}
                      onChange=
                      {event => this.setState({
                      statData: {...this.state.statData, Burned: event.target.value }})
                      }
                      name="burned"/>
                    <br />


                    Low:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.Low}
                      onChange=
                      {event =>this.setState({
                          statData: {...this.state.statData, Low: event.target.value }})
                      }
                      name="low"/>
                    <br />


                    Medium:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.Medium}
                      onChange={event =>
                        this.setState({
                        statData: {...this.state.statData, Medium: event.target.value}})
                      }
                      name="medium"/>
                    <br />



                    High:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.High}
                      onChange={event =>
                        this.setState({
                          statData: { ...this.state.statData, High: event.target.value }})
                      }
                      name="high"/>
                    <br />


                    Critical:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.Critical}
                      onChange={event =>
                        this.setState({
                          statData: {...this.state.statData, Critical: event.target.value}})
                      }
                      name="critical"/>
                    <br />


                    Extreme:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.Extreme}
                      onChange={event =>
                        this.setState({
                          statData: {...this.state.statData, Extreme: event.target.value}})
                      }
                      name="extreme"/>
                    <br />


                    AvgHR:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.AvgHR}
                      onChange={event =>
                        this.setState({
                        statData:{...this.state.statData, AvgHR: event.target.value}
                        })}
                      name="AvgHR"/>
                    <br />


                    PeakHR:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.PeakHR}
                      onChange={event =>
                        this.setState({
                          statData: {...this.state.statData, PeakHR: event.target.value}
                        })}
                      name="PeakHR"/>
                    <br />


                    AvgPercMaxHR:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.AvgPercMaxHR}
                      onChange={event =>
                      this.setState({
                      statData: {...this.state.statData, AvgPercMaxHR: event.target.value}})}
                        
                      name="AvgPercMaxHR"/>
                    <br />


                    MaxHR:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
                      defaultValue={this.state.statData.MaxHR}
                      onChange={event =>
                        this.setState({
                          statData: {...this.state.statData, MaxHR: event.target.value}})}
                      name="MaxHR"/>
                    <br />

                  </Col>
                </Row>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button color="grey" onClick={() => this.toggle(14)}>
                Close
              </Button>

              <Button color="blue" onClick={() => this.editStats()}>
                Edit Stat
              </Button>
            </ModalFooter>

          </Modal>
        </Container>
      </div>
    );
  }
}

export default EditModalPage;
