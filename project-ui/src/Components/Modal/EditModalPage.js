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

class EditModalPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statData: [],
      modal14: false
    };
  }
//(***Not Updated in Page)
  componentDidMount() {
    // console.log("data is logging", data);
    const url = "http://localhost:4000/stats/id/" + this.props.rowId;
    fetch(url, 
      {method: "GET"})
      .then(res => res.json())
      .then(data => {
        this.setState({ statData: data[0] });
      });
  }


  editStats = async event => {
    console.log("PUUUUTTTT", this.state.statData);
    const url = "http://localhost:4000/stats/id/" + this.props.rowId;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(this.state.statData)
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  
  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    console.log(this.state.statData);
    return (
      <div>
        <Container>
          <Button color="blue" onClick={() => this.toggle(14)}>
            Edit
          </Button>
          <Modal
            isOpen={this.state.modal14}
            toggle={() => this.toggle(14)}
            centered
          >
            <ModalHeader toggle={() => this.toggle(14)}>
              Edit Stats in Database
            </ModalHeader>
            <ModalBody>
              <form>
                <Row>
                  <Col>
                    Date:
                    <div style={{ textAlign: "left", padding: "0px 10px" }} />
                    <input
                      type="text"
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
                      type="text"
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
                        statData: {...this.state.Data, Medium: event.target.value}})
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
                          Data: {...this.state.Data, Critical: event.target.value}})
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
                          Data: {...this.state.statData, Extreme: event.target.value}})
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
                        Data:{...this.state.statData, AvgHR: event.target.value}
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
                          Data: {...this.state.Data, MaxHR: event.target.value}})}
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
              <Button color="blue" onClick={this.editStats}>
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
