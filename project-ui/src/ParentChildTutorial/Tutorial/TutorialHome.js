// //* Import Order Matters

// import React, { Component } from 'react';

// import NavBar from '../Comp/NavBar';
// import ParentOne from '../reactttcomps/ParentOne';
// import ParentTwo from '../reactttcomps/ParentTwo';


// class TutorialHome extends Component {
  
//   state = {
//     practice: [
//       {name: "Karlee", age: "31" , eyeColor: "green"},
//       {name: "Dave", age: "33", eyeColor: "blue"}
//     ]
//   }
//   //when passing in newName as an argument for switchNameHandler, and adusting the name: "newName" under persons, you also add .bind(this, value of new name you created)
//   //is the function associated with the button when clicking it
  
//   switchStateHandler= (newState) => {
//     //console.log('was clicked');

//     this.setState({
//       practice [{
//         name: "Updated on Set State"
//       }]
//     })
//   }
  
//   eventChangeHandler= (event) => {
//     this.setState({ 
//       Practice: 
//         {key : "on typing, key updates", value: "on typing, value updates"},
//     })
//   }
  
//   render() {
//     return (
//         <div>
//             <NavBar/>
           
           
//             <ParentOne 
//             name= {this.state.practice[0].name}  
//             eyeColor={this.state.practice[0].eyeColor}>
//                 This is a child of Parent #1
//             </ParentOne>
            
//                 <hr></hr>
//             <ParentTwo name= "Parent Wrapper">
//                 This is a child of Parent #2
//             </ParentTwo>
            
            
            
          
            
            

//             <button onClick= {this.switchStateHandler}>Switch State</button>
            
            
//             {/*this.switchNameHandler becomes a prop of Person and called as {props.click} in the<p/>*/}
            


//             {/* <Practice
//             click={this.switchNameHandler.bind(this, 'trailor')} 
//             name ={this.state.persons1].name}  
//             age= {this.state.practice[1].age}> 
//               This is a child of Dave</Practice>
           
//             <Practice
//             name ={this.state.practice[2].name} 
//             age={this.state.practice[2].age} 
//             changed={this.nameChangeHandler}/> */}
            
//         </div>
//     );
//   }
// }

// export default TutorialHome;
