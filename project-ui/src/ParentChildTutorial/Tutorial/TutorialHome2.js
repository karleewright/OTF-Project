
// import React, { Component } from 'react';
// // import ViewStats from '../Comp/ViewStats'; 
// // import StatsTable from '../Comp/StatsTable';


// import NavBar from '../Comp/NavBar';
// import AddStats from '../Comp/AddStats'; 
// import Person from '../reactttcomps/Tutorial';

// import StatsHome from '../reactttcomps/StatsHome';

// class Home extends Component {
  
//   state = {
//     persons: [
//       {name : "karlee ", age: "31"},
//       {name : "dave ", age: "33"},
//       {name : "kayla ", age: "28"},
//     ]
//   }
//   //when passing in newName as an argument for switchNameHandler, and adusting the name: "newName" under persons, you also add .bind(this, value of new name you created)
//   //is the function associated with the button when clicking it
//   switchNameHandler= (newName) => {
//     // console.log('was clicked');
   
//     // This tells the switchNameHandler what to render when compairing orig. code to new code
//     this.setState({ 
//     persons: [
//       {name : "trailor", age: "31"},
//       {name : "goose", age: "33"},
//       {name : "kayla ", age: "!!!"},
//     ]})
//   }
  
//   nameChangeHandler= (event) => {
//     this.setState({ 
//       persons: [
//         {name : "trailor", age: "31"},
//         {name : "goose", age: "33"},
//         {name : event.target.value, age: "!!!"},
//       ]})
//   }
  
//   render() {
//     return (
//         <div>
//             <NavBar/>
//             <AddStats />
//             <button onClick= {this.switchNameHandler}>Switch Name</button>
//             <Person 
//             name = {this.state.persons[0].name} 
//             age = {this.state.persons[0].age}/>
            
//             {/*this.switchNameHandler becomes a prop of Person and called as {props.click} in the<p/>*/}
//             <Person  
//             click={this.switchNameHandler.bind(this, 'trailor')} 
//             name ={this.state.persons[1].name}  
//             age= {this.state.persons[1].age}> 
//               This is a child of Dave</Person>
           
//             <Person 
//             name ={this.state.persons[2].name} 
//             age={this.state.persons[2].age} 
//             changed={this.nameChangeHandler}/>
//             {/* <StatsHome/> */}
//             {/* <ViewStats/>
//             <StatsTable/> */}
//         </div>
//     );
//   }
// }

// export default Home;
