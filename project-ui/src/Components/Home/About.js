import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardText, CardGroup } from 'mdbreact';



class About extends Component {
  render() {
    
    return (
      <div className="cards">
          <h1>About My OTF Project</h1>
             <CardText>
               An ongoing personal project to measure my personal progress in fitness and web development.
               <li> Workflow Tracker with DataBase logging</li>
               <li> YTD/MTD/WTD Visual dashboard of Workout Stats</li>
               <li>Implement Nutrition Tracker and InBody Measurements</li>
             </CardText>
            <CardGroup deck>

            <Card>
            <div>
            <Button color="grey" size="small" href="/projectprogress">
            View Project Progress</Button>
            </div>

            <CardBody>
            <CardImage 
            src="https://png.pngtree.com/element_origin_min_pic/17/03/17/5a923578a66934504d5f9a2a26185e2d.jpg " alt="Card image cap" top hover overlay="white-slight"/>
          
  
            
            </CardBody>
            </Card>


            </CardGroup>
            </div>
    );
  }
}





export default About;
