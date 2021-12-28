import React, { Component } from "react";
class Number extends Component{
    render(){
        return(
            <h1>math rendom number:{Math.random()*100}</h1>
        )
    }
}
export default Number;