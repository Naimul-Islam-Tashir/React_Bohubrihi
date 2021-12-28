import React from "react";
import './Book.css';
const Book=(props)=>{
return(
    <div className="book">
        <div className="book-continer">
        <h3 onClick={props.cange}>BookName:{props.name}</h3>
        <h4>Writer :{props.writer}</h4>
        <input type="text" onChange={props.inputName} value={props.name}></input>
        </div>
    </div>
)
}
export default Book;
