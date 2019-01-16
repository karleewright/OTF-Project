//Modals Control FLOW Add Stats Modal

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
 
} from "mdbreact";



class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    
    //allows for change in state to each of the fields on my modal page
    this.state = {
    Data : {
        Date : "",
        Burned : "",
        Low : "",
        Medium : "",
        High : "",
        Critical : "",
        Extreme : "",
        AvgHR : "",
        PeakHR : "",
        AvgPercMaxHR : "",
        MaxHR : ""
       },
      
       modal14: false
      
    
    };
   
  }
  
  

  onClick(event) {
    return this.state.statData
    }
  
  addStat = async (event) => {
  
   const url= "http://localhost:4000/stats"
   await fetch (url, {
     method: "POST",
     body: JSON.stringify(this.state.Data)
   }).then(res => res.json())
   .then(res => console.log('success: ', JSON.stringify(res)))
   .catch(error => console.log('Error:', error))
  .then(()=>this.props.dataGrabber())
  .then(() => this.toggle(14))
 }




  


  toggle(nr) { 
    let modalNumber = "modal" + nr;  
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }




  render() {
    return (
      <div>
      <Container>
        <Button color="green" 
        onClick={() => this.toggle(14)}
         >Add Stats</Button>
        <Modal 
        isOpen={this.state.modal14} 
        toggle={() => this.toggle(14)} centered>
          <ModalHeader toggle={() => this.toggle(14)}>Add Stats To Database</ModalHeader>
          <ModalBody>

            <form>
            <Row>
               <Col>
                  Date:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="date" 
                  defaultValue= {this.state.Data.Date} 
                  onChange= {event=> this.setState ({Data: {...this.state.Data, Date:event.target.value}})}
                  name= "date"  
                  placeholder="YYYY.MM.DD" /> 
                  <br />
                  

                  Burned:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="number" 
                  defaultValue= {this.state.Data.Burned}
                  onChange= {event=>this.setState ({Data: {...this.state.Data, Burned:event.target.value}})}
                  name="burned" 
                  placeholder="Calories Burned?" />
                  <br />
                 

                  Low:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue= {this.state.Data.Low}
                  onChange= {event=>this.setState ({Data: {...this.state.Data, Low:event.target.value}})}
                  name="low"  
                  placeholder="Grey HR Zone" />
                  <br />
                 
              
                  Medium:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue={this.state.Data.Medium}
                  onChange= {event=>this.setState ({Data: {...this.state.Data, Medium:event.target.value}})}
                  name="medium" 
                  placeholder="Blue HR Zone" />
                  <br />
             
                  High:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue={this.state.Data.High}
                  onChange={event=>this.setState ({Data: {...this.state.Data, High:event.target.value}})}
                  name="high" 
                  placeholder="Green HR Zone" />
                  <br />
              
                  Critical:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue= {this.state.Data.Critical}
                  onChange= {event=>this.setState ({Data: {...this.state.Data, Critical:event.target.value}})}
                  name="critical" 
                  placeholder="Orange HR Zone" />
                  <br />
             
                  Extreme:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue= {this.state.Data.Extreme}
                  onChange={event=>this.setState ({Data: {...this.state.Data, Extreme:event.target.value}})}
                  name="extreme" 
                  placeholder="Red HR Zone" />
                  <br />
              
                  AvgHR:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue={this.state.Data.AvgHR}
                  onChange={event=>this.setState ({Data: {...this.state.Data, AvgHR:event.target.value}})}
                  name="AvgHR" 
                  placeholder="Average Heart Rate #" />
                  <br />
              
                  PeakHR:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue={this.state.Data.PeakHR}
                  onChange={event=>this.setState ({Data: {...this.state.Data, PeakHR:event.target.value}})}
                  name="PeakHR" 
                  placeholder="Peak Heart Rate #" />
                  <br />
              
                  AvgPercMaxHR:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue={this.state.Data.AvgPercMaxHR}
                  onChange={event=>this.setState ({Data:{...this.state.Data, AvgPercMaxHR:event.target.value}})}
                  name="AvgPercMaxHR" 
                  placeholder="Average % Max HR" />
                  <br />
              
                  MaxHR:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue={this.state.Data.MaxHR}
                  onChange={event=>this.setState ({Data:{...this.state.Data, MaxHR:event.target.value}})}
                  name="MaxHR" 
                  placeholder="Max HR #" />
                  <br />
              </Col>
              </Row>
     
            </form> 
          </ModalBody>
          <ModalFooter>
            <Button color="grey" onClick={() => this.toggle(14)} >Close</Button>
            <Button color="green" 
            onClick= {this.addStat}
            >Add Stat
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
      </div>
    )}

}

export default ModalPage;
