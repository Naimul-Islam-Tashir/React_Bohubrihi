import React, { Component } from "react";

//  const Person=(props)=>{
//     return (
//      <div>
//         <h1> person name={props.name} Age {props.age} </h1>
//         <h2>extra word :{props.children}</h2>
//         </div>
//     );
// }

//class compont
class Person extends Component{
   
    render(){
        return(<h1> hello tashir ahmed {this.props.name}</h1>)
            
    }
}

export default Person;