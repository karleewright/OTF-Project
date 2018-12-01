//table display
//create fetch JS()  to view stats then import to parent which is HOME
//use Coms file to add stats?

// ??? === Question to lookup 
// ONLY THINK ABOUT WHAT IS NECESSARY.

import React, {Component} from 'react';
//naming: In this class what do we want to do? "ViewStats"

class ViewStats extends Component {
    constructor(){
        super(); //supercall extends component :  What is a supercall purpose???
                                                  //ANSWER: 
        //globalClassVariables:      this.varName
        
        //@KW refine this when you know more.
         this.state = {
            Date: " ",
            Burned: " ",
            Low: " ",
            Med: " ",
            High: " ",
            Critical: " ",
            Extreme: " ",
            AvgHR: " ",
            PeakHR: " ",
            AvgPercMaxHR: " ",
            MaxHR: " ",

            loaded : false
        };
        //default loaded is set to false can it ever be set to open? This sets state for the props so when the stats load we need to update this to true for it to work?
            
        // this.handleClick = this.handleClick.bind(this) //when I say handleClick I want you to think of this class, and .bind(what?- this)
    }
    
    //HERE COMES YOUR API CALLL!!!!!

    componentWillMount () {   


         //globalClassVariables:      this.varName
         const results = this.getStatResult
         //When I say the variable "results" I am also saying get the data results in a new object in this class (also global?) called "getStatResult" which only applies to this class.
                 
         //does the .allStat_____here just allow variable to mutate to further describe something???
 
          const data = this.allStatData
          //When I say the variable "data" I am assigning it a new ID  as allStatData in a new object in this cass (also global?) called  "allStatData". 
         
          //Is this correct???
         //     Allows me to .target() in 
         //     this.allStatData.Date, 
         //     this.allStatData.Burned, 
         //     this.allStatData.Low
       
 
         //this.state says this class has objects??? (API pulls them in) 
         // this.state applies to this className "ViewStats" we have framed out in {scope} above. 
         // Inside we have Key  :  "value" pairs that are props of this class
        
         //function handlErrors defines what to do if there are anyerrors in API Call 
        function handleErrors(response) { 
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }

        fetch("http://localhost:4000/stats") // where your data is 
            
            // calling the handleErrors functiton if there is issue in API call first
            .then(handleErrors) 

            // then if no issue, a function called results will return our result in json format and console log "works" 
            .then(results => {
                return results.json(); 
                console.log("works")
            })

            // then we async/await the display of results that get loaded. Like jello transfered over before it is displayed. 
            .then(async data => {
                data = await results.json();
                console.log("results loaded")
            })
            // lastly, need to catch any error if not working and console log "error"
            .catch(error => console.log("error") );
         };
        
                // data.map((Stat) => {
                //     return(
                //         <div key={Stat.results}>
                //         {Stat.Date} /
                //         {Stat.Burned} /
                //         {Stat.Low} /
                //         {Stat.Med} /
                //         {Stat.High} /
                //         {Stat.Critical} /
                //         {Stat.Extreme} /
                //         {Stat.AvgHR} /
                //         {Stat.PeakHR} /
                //         {Stat.AvgPercMaxHR} /
                //         {Stat.MaxHR} /
                //         </div>
                //     )
                // })
                
                // ReactJS — setState. Component state is a way of holding, processing and using information that is internal to a given Component and allows you to implement its logic

                
                // this.setState 
                // ({results : data, 
                //     loaded : true 
                // });
                // console.log("stat", this.stat.Date)
                // console.log(JSON.stringify(myJson));
           
            render () {

            return (
                <div>
                    return something
                </div>
            )
            
            };




        }
        export default  ViewStats;
    






//     render() {
//     return (
//     // function Glossary(props) {
//     //     return (
//     //       <fragment >
//     //         {props.items.map(item => (
//     //           // Without the `key`, React will fire a key warning
//     //           <React.Fragment key={item.id}>
//     //             <dt>{item.term}</dt>
//     //             <dd>{item.description}</dd>
//     //           </React.Fragment>
//     //         ))}
//     //       </dl>
//     //     );
//     //   }
//     <div>
        
//          {this.state.Date} 
//          {/* {this.state.Burned} 
//          {this.state.Low} 
//          {this.state.Med} 
//          {this.state.High} 
//          {this.state.Critical} 
//          {this.state.Extreme} 
//          {this.state.AvgHR} 
//          {this.state.PeakHR} 
//          {this.state.AvgPercMaxHR} 
//          {this.state.MaxHR}  
//           */}

//    </div>
  
