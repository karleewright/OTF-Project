import React, {Component} from 'react';





export default class Login extends React.Component {
  render() {
    return (
      <div className="loginform">
        <form>
               First Name:
               <input type = "text" name= "name" placeholder= "First Name"/>
               Last Name:
               <input type = "text" name= "name" placeholder= "Last Name"/>
               <input type ="submit" value = "onsubmit"/>
        </form>
      </div>
    );
  }
}


