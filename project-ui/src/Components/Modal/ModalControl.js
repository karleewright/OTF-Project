
//import {apiObject} from '../../APICalls/api'
// The only API Call I Need

import React from 'react';



class ModalControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // POST: this.state.post,
      // PUT: this.state.put,
      // DELETE: this.state.delete,
      // GET: this.state.get,

      isOpen : false

      


    }}

     /* taking the "data" and setting it to a NEW object this.state.stats to be passed around and used by children within the StatsTable Component */


    render(){



      return(

       <div>
         
        Inside Modal ModalControl: <br/>
        Add Stats JSX <br/>
        Delete Stats JSX <br/>
        Update Stats JSX <br/>
       
       </div>
      
      )

    }

}
    
export default ModalControl;























    // import {
    //   //   Container,
    //   //   Button,
    //   //   Modal,
    //   //   ModalBody,
    //   //   ModalHeader,
    //   //   ModalFooter,
    //   //   Row,
    //   //   Col,
    //   //   Title
    //   // } from "mdbreact";
      




//     let stats;
    
//     if (props.stats) {
//     stats = props.stats
//     } else {
//     // stats = 'Date': '',
//     //         'Burned': '',
//     //         'Low': '', 
//     //           'Med': '', 
//     //           'High': '',
//     //           'Critical': '', 
//     //           'Extreme': '', 
//     //           'AvgHR': '', 
//     //           'PeakHR': '', 'AvgPercMaxHR': '', 'MaxHR': ''}

//    }


//     this.state = {
//       Date: stats.Date,
//       Burned: stats.Burned,
//       Low: stats.Low,
//       Med: stats.Med,
//       High: stats.High,
//       Critical: stats.Critical,
//       Extreme: stats.Extreme,
//       AvgHR: stats.AvgHR,
//       PeakHR: stats.PeakHR,
//       AvgPercMaxHR: stats.AvgPercMaxHR,
//       MaxHR: stats.MaxHR,

//       modal14: false}
//     }

    
  
   
//       toggle(onClick) {
//       let modalNumber = 'modal' + onClick
//       this.setState({
//         [modalNumber]: !this.state[modalNumber]
//       });
//     }

//     render() {
      
//       return (
//         <Container>
//           <Button color="primary" onClick={() => this.toggle(14)}>
//             Add Stats
//           </Button>
          
//           <Modal 
//             isOpen={this.state.modal14}
//             toggle={() => this.toggle(14)}
//             centered >
  
//           <ModalHeader  
//             toggle={() => this.toggle(14)}> Add Your Stats Here 
//           </ModalHeader>
  
//           <ModalBody>
//           <Container  className="text-white">
//               <form className= "statsform"
//               // onSubmit={this.handleSubmit}
//               >
//               <Row>
//               <Col>
//                 Date:
//                 <input type="text"  
                
//                 // onChange= {event=> this.setState ({Date:event.target.value})}
//                 name= "date"  
//                 placeholder="YYYY.MM.DD"
//                 id= "dbID" />
//                 <br />
//               </Col>
//               </Row>
//                 </form>
            
//           </Container>
//           </ModalBody>
  
//             <ModalFooter>
//              <Button  
//              color="primary" 
//             //  onClick ={ () => this.handleSubmit}
//             >
//              Save changes</Button>
             
//              <Button 
//              color="secondary" 
//              onClick={() => this.toggle(14)}>
//              Close</Button>
             
//             </ModalFooter>
//           </Modal>
//         </Container>
      
//       )
//   }
// }

                                                                                            
//     // componentWillMount() { 
  


    //   onClick= (evt) => {
    //   evt.preventDefault()
    //   this.setState({
    //       Date: this.state.Date.concat([ '' ])
    //   }); 
    //   }
  
    // }


    // HOW TO USE THIS??
    //  handleSubmit = (evt) => {
        // evt.preventDefault()
        // console.log(this.state) 
    //     let path = this.props.path API (SEE ABOVE)
    //     if(!path){
    //         path = ''
    //     }   
    //     artistAPI(this.state, this.props.action, path)
    // }

  //   render() {
      
  //   return (
  //     <Container>
  //       <Button color="primary" onClick={() => this.toggle(14)}>
  //         Add Stats
  //       </Button>
        
  //       <Modal 
  //         isOpen={this.state.modal14}
  //         toggle={() => this.toggle(14)}
  //         centered >

  //       <ModalHeader  
  //         toggle={() => this.toggle(14)}> Add Your Stats Here 
  //       </ModalHeader>

  //       <ModalBody>
  //       <Container  className="text-white">
  //           <form className= "statsform"
  //           // onSubmit={this.handleSubmit}
  //           >
  //           <Row>
  //           <Col>
  //             Date:
  //             <input type="text"  
              
  //             // onChange= {event=> this.setState ({Date:event.target.value})}
  //             name= "date"  
  //             placeholder="YYYY.MM.DD"
  //             id= "dbID" />
  //             <br />
  //           </Col>
  //           </Row>
  //             </form>
          
  //       </Container>
  //       </ModalBody>

  //         <ModalFooter>
  //          <Button  
  //          color="primary" 
  //         //  onClick ={ () => this.handleSubmit}
  //         >
  //          Save changes</Button>
           
  //          <Button 
  //          color="secondary" 
  //          onClick={() => this.toggle(14)}>
  //          Close</Button>
           
  //         </ModalFooter>
  //       </Modal>
  //     </Container>
    
  //   );
  // }
    
              
              /* Burned:
              <input type="text" 
              value= {this.state.Burned}
              onChange= {event=>this.setState ({Burned:event.target.value})}
              name="burned" 
              placeholder="Calories Burned?" />
              <br />
              
              Low:
              <input type="text" 
              value= {this.state.Low}
              onChange= {event=>this.setState ({Low:event.target.value})}
              name="low"  
              placeholder="Grey HR Zone" />
              <br />
              
              Medium:
              <input type="text" 
              value={this.state.Medium}
              onChange= {event=>this.setState ({Medium:event.target.value})}
              name="medium" 
              placeholder="Blue HR Zone" />
              <br />
             
              High:
              <input type="text" 
              value={this.state.High}
              onChange={event=>this.setState ({High:event.target.value})}
              name="high" 
              placeholder="Green HR Zone" />
              <br />
              
              Critical:
              <input type="text" 
              value= {this.state.Critical}
              onChange= {event=>this.setState ({Critical:event.target.value})}
              name="critical" 
              placeholder="Orange HR Zone" />
              <br />
             
              Extreme:
              <input type="text" 
              value= {this.state.Extreme}
              onChange={event=>this.setState ({Extreme:event.target.value})}
              name="extreme" 
              placeholder="Red HR Zone" />
              <br />
              
              AvgHR:
              <input type="text" 
              value={this.state.AvgHR}
              onChange={event=>this.setState ({AvgHR:event.target.value})}
              name="AvgHR" 
              placeholder="Average Heart Rate #" />
              <br />
              
              PeakHR:
              <input type="text" 
              value={this.state.PeakHR}
              onChange={event=>this.setState ({PeakHR:event.target.value})}
              name="PeakHR" 
              placeholder="Peak Heart Rate #" />
              <br />
              
              AvgPercMaxHR:
              <input type="text" 
              value={this.state.AvgPercMaxHR}
              onChange={event=>this.setState ({AvgPercMaxHR:event.target.value})}
              name="AvgPercMaxHR" 
              placeholder="Average % Max HR" />
              <br />
              
              MaxHR:
              <input type="text" 
              value={this.state.MaxHR}
              onChange={event=>this.setState ({MaxHR:event.target.value})}
              name="MaxHR" 
              placeholder="Max HR #" />
              <br /> */
  //DO I NEED THIS??
  // componentDidMount() to grab external data on the GET call 
  //componentWillUpdate() to update data on PUT/POST/DEL call?






