import React from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Col,
  Title
} from "mdbreact";

//add stat
//update stat
//delete stat

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false
    };
  }

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <Container>
        <Button color="primary" onClick={() => this.toggle(14)}>
          Add Stats
        </Button>
        <Modal 
          isOpen={this.state.modal14}
          toggle={() => this.toggle(14)}
          centered >
          <ModalHeader  toggle={() => this.toggle(14)}> </ModalHeader>
          <ModalBody>
       
          <Container  className="text-white">
            <form >
            <Row>
            <Col size= "fluid">
              <h1>
              Date:
              </h1>
              <input type="text" name="date" placeholder="YYYY.MM.DD" />
              <br />
              <h1>
              Burned:
              </h1>
              <input type="text" name="burned" placeholder="Calories Burned?" />
              <br />
              <h1>
               Low:
              </h1>
              <input type="text" name="grey"  placeholder="Grey HR Zone" />
              <br />
              <h1>
              Medium:
              </h1>
              <input type="text" name="blue" placeholder="Blue HR Zone" />
              <br />
              <h1>
              High:
              </h1>
              <input type="text" name="green" placeholder="Green HR Zone" />
              <br />
              <h1>
              Critical:
              </h1>
              <input type="text" name="orange" placeholder="Orange HR Zone" />
              <br />
              <h1>
              Extreme:
              </h1>
              <input type="text" name="red" placeholder="Red HR Zone" />
              <br />
              <h1>
              AvgHR:
              </h1>
              <input type="text" name="AvgHR" placeholder="Average Heart Rate #" />
              <br />
              <h1>
              PeakHR:
              </h1>
              <input type="text" name="PeakHR" placeholder="Peak Heart Rate #" />
              <br />
              <h1>
              AvgPercMaxHR:
              </h1>
              <input type="text" name="AvgPercMaxHR" placeholder="Average % Max HR" />
              <br />
              <h1>
              MaxHR:
              </h1>
              <input type="text" name="MaxHR" placeholder="Max HR #" />
              <br />
              </Col>
              </Row>
            </form>
          </Container>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(14)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;
