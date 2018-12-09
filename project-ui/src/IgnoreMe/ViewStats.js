
    
    
       
    

//          //globalClassVariables:      this.varName
//         //  const results = this.getStatResult
//          //When I say the variable "results" I am also saying get the data results in a new object in this class (also global?) called "getStatResult" which only applies to this class.
                 
//          //does the .allStat_____here just allow variable to mutate to further describe something???
 
//         // const data = this.allStatData
//         //   //When I say the variable "data" I am assigning it a new ID  as allStatData in a new object in this cass (also global?) called  "allStatData". 
         
//           //Is this correct???
//          //     Allows me to .target() in 
//          //     this.allStatData.Date, 
//          //     this.allStatData.Burned, 
//          //     this.allStatData.Low
       
 
//          //this.state says this class has objects??? (API pulls them in) 
//          // this.state applies to this className "ViewStats" we have framed out in {scope} above. 
//          // Inside we have Key  :  "value" pairs that are props of this class
        
//          //function handlErrors defines what to do if there are anyerrors in API Call 
//         // function handleErrors(response) { 
//         //     if (!response.ok) {
//         //         throw Error(response.statusText);
//         //     }
//         //     return response;
//         // }

//         // fetch("http://localhost:4000/stats") // where your data is 
//         //     // calling the handleErrors functiton if there is issue in API call first
//         //     // .then(handleErrors( results )) 

//         //     // then if no issue, a function called results will return our result in json format and console log "works" 
//         //     .then(results => {
//         //         return results.json(); 
//         //         console.log("works")
//         //     })
//         //     // then we async/await the display of results that get loaded. 
//         //     .then(async results => {
//         //         data = await results.json();
//         //         console.log("results loaded")
            
//         //     .catch(error => console.log("error") );
            
//         //     })

//         //     .then(this.setState( 
//         //         {allStatData : data}) )
//         //     //this setsState of allStatData
                
//             // lastly, need to catch any error if not working and console log "error"
//             // .catch(error => console.log("error") );
            
//             // console.log(this.state.allStatData)
         
            

//                 // data.map((Stat) => {
//                 //     return(
//                 //         <div key={Stat.results}>
//                 //         {Stat.Date} /
//                 //         {Stat.Burned} /
//                 //         {Stat.Low} /
//                 //         {Stat.Med} /
//                 //         {Stat.High} /
//                 //         {Stat.Critical} /
//                 //         {Stat.Extreme} /
//                 //         {Stat.AvgHR} /
//                 //         {Stat.PeakHR} /
//                 //         {Stat.AvgPercMaxHR} /
//                 //         {Stat.MaxHR} /
//                 //         </div>
//                 //     )
//                 // })
                
//                 // ReactJS — setState. Component state is a way of holding, processing and using information that is internal to a given Component and allows you to implement its logic

                
//                 // this.setState 
//                 // ({results : data, 
//                 //     loaded : true 
//                 // });
//                 // console.log("stat", this.stat.Date)
//                 // console.log(JSON.stringify(myJson));
           
            




// //     render() {
// //     return (
// //     // function Glossary(props) {
// //     //     return (
// //     //       <fragment >
// //     //         {props.items.map(item => (
// //     //           // Without the `key`, React will fire a key warning
// //     //           <React.Fragment key={item.id}>
// //     //             <dt>{item.term}</dt>
// //     //             <dd>{item.description}</dd>
// //     //           </React.Fragment>
// //     //         ))}
// //     //       </dl>
// //     //     );
// //     //   }
// //     <div>
        
// //          {this.state.Date} 
// //          {/* {this.state.Burned} 
// //          {this.state.Low} 
// //          {this.state.Med} 
// //          {this.state.High} 
// //          {this.state.Critical} 
// //          {this.state.Extreme} 
// //          {this.state.AvgHR} 
// //          {this.state.PeakHR} 
// //          {this.state.AvgPercMaxHR} 
// //          {this.state.MaxHR}  
// //           */}

// //    </div>
  
