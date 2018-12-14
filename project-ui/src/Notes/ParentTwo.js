import React, { Component } from 'react';

// wrap in {} to output dynamic content

//have to pass in props that you have in <Person name= {this.state.person[index#].name}/>

//use these functional components as often as possible so they do one thing. They feed into the application state.  
const ParentTwo = (props) =>{
    return(
            <div>
            <h1>  This is Parent #2 ||aka|| {props.name}  </h1> 
           
            <h2> {props.children} 
            <p>Children can take in functions too like this: 
                 {Math.floor(Math.random() * 10)} </p> 
            </h2> 
               <p input type= "text" />
            
            </div>
                
    )
}
export default ParentTwo;