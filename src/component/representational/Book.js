import React from "react";
import '../../stylesheets/Book.css';
const Book=(props)=>{
return(
    <div className="book">
        <div className="book-continer">
        <h3 onClick={props.delete}>BookName : {props.bookname}</h3>
        <h4>Writer :{props.writer}</h4>
        <input type="text" onChange={props.inputName}  value={props.bookname}></input>
        </div>
    </div>
)
}
export default Book;
