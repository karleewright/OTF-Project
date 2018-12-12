//Modals Control FLOW  pops up as 

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
  
  
  addStat = async (event) => {
    console.log("POOOSTING", this.state.Data);
 
   const url= "http://localhost:4000/stats"
   await fetch (url, {
     method: "POST",
     body: JSON.stringify(this.state.Data)
   }).then(res => res.json())
   .then(res => console.log('success: ', JSON.stringify(res)))
   .catch(error => console.log('Error:', error))
 }




  editStats(){
    console.log("modal edit button works")
  }

  deleteStats(){
    console.log("modal delete button works")
  }

  //WHY DO I HAVE A MODAL # HERE?
//Objective: 
 //I want my model to set state on {object} with toggle. 
 //I need a function to setState() to EACH modalNumber #?
 //I need my
  //interaction point to also be a function .

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
        <Button color="green" onClick={() => this.toggle(14)} >Add Stats</Button>
        <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
          <ModalHeader toggle={() => this.toggle(14)}>Add Stats To Database</ModalHeader>
          <ModalBody>
            <form>
            <Row>
               <Col>
                  Date:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
                  defaultValue= {this.state.Data.Date} 
                  onChange= {event=> this.setState ({Data: {...this.state.Data, Date:event.target.value}})}
                  name= "date"  
                  placeholder="YYYY.MM.DD" /> 
                  <br />
                  

                  Burned:
                  <div style = {{textAlign:"left", padding: "0px 10px"}}></div>
                  <input type="text" 
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
            <Button color="secondary" onClick={() => this.toggle(14)}>Close</Button>
            <Button color="green" onClick= {this.addStat}>Add Stat</Button>
          </ModalFooter>
        </Modal>
      </Container>
      </div>
    )


  }

}

export default ModalPage;


  //     <Container>
       
  //       <Button color="primary" 
  //               onClick={() => this.toggle(14)}>
  //               Update Stats Here
  //       </Button>
        
  //       <Modal isOpen={this.state.modal14}
  //               toggle={() => this.toggle(14)}>
        
  //       <ModalHeader  
  //               toggle={() => this.toggle(14)}> 
  //               Add Your Stats Here 
  //       </ModalHeader>
        
  //             <ModalBody>   
        
  //             <Container  
  //             className="text-white">
  //             <form className= "statsform" 
  //             onSubmit={this.handleSubmit}/>
            
  //             <Row>
  //             <Col>
  //                 Date:
  //                 <div style = {{textAlign:"left", padding: "5px 5px"}}>
  //                 <input type="text" 
  //                 value= {this.state.Date} 
  //                 onChange= {event=> this.setState ({Date:event.target.value})}
  //                 name= "date"  
  //                 placeholder="YYYY.MM.DD" /> 
  //                 <br />
  //                 </div>

  //                 Burned:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}>
  //                 <input type="text" 
  //                 value= {this.state.Burned}
  //                 onChange= {event=>this.setState ({Burned:event.target.value})}
  //                 name="burned" 
  //                 placeholder="Calories Burned?" />
  //                 <br />
  //                 </div>

  //                 Low:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value= {this.state.Low}
  //                 onChange= {event=>this.setState ({Low:event.target.value})}
  //                 name="low"  
  //                 placeholder="Grey HR Zone" />
  //                 <br />
                 
              
  //                 Medium:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value={this.state.Medium}
  //                 onChange= {event=>this.setState ({Medium:event.target.value})}
  //                 name="medium" 
  //                 placeholder="Blue HR Zone" />
  //                 <br />
             
  //                 High:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value={this.state.High}
  //                 onChange={event=>this.setState ({High:event.target.value})}
  //                 name="high" 
  //                 placeholder="Green HR Zone" />
  //                 <br />
              
  //                 Critical:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value= {this.state.Critical}
  //                 onChange= {event=>this.setState ({Critical:event.target.value})}
  //                 name="critical" 
  //                 placeholder="Orange HR Zone" />
  //                 <br />
             
  //                 Extreme:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value= {this.state.Extreme}
  //                 onChange={event=>this.setState ({Extreme:event.target.value})}
  //                 name="extreme" 
  //                 placeholder="Red HR Zone" />
  //                 <br />
              
  //                 AvgHR:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value={this.state.AvgHR}
  //                 onChange={event=>this.setState ({AvgHR:event.target.value})}
  //                 name="AvgHR" 
  //                 placeholder="Average Heart Rate #" />
  //                 <br />
              
  //                 PeakHR:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value={this.state.PeakHR}
  //                 onChange={event=>this.setState ({PeakHR:event.target.value})}
  //                 name="PeakHR" 
  //                 placeholder="Peak Heart Rate #" />
  //                 <br />
              
  //                 AvgPercMaxHR:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value={this.state.AvgPercMaxHR}
  //                 onChange={event=>this.setState ({AvgPercMaxHR:event.target.value})}
  //                 name="AvgPercMaxHR" 
  //                 placeholder="Average % Max HR" />
  //                 <br />
              
  //                 MaxHR:
  //                 <div style = {{textAlign:"left", padding: "10px 10px"}}></div>
  //                 <input type="text" 
  //                 value={this.state.MaxHR}
  //                 onChange={event=>this.setState ({MaxHR:event.target.value})}
  //                 name="MaxHR" 
  //                 placeholder="Max HR #" />
  //                 <br />
              
              
  //             </Col>
  //             </Row>
     
          
  //             <ModalFooter>
  //          <Button  
  //          color="primary" 
  //          onClick ={ () => this.handleSubmit}>
  //          Save changes</Button>
  //          <Button 
  //          color="secondary" 
  //          onClick={() => this.toggle(14)}>
  //          Close</Button>
  //          </ModalFooter>
  //         </Modal>
  //       </Container>
    
  //   );
  // }

  //DO I NEED THIS??
  // componentDidMount() to grab external data on the GET call 
  //componentWillUpdate() to update data on PUT/POST/DEL call?
