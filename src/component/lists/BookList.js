import React from "react";
import Book from "../representational/Book";

const BookList=(props)=>{
    return(
        props.books.map((book , index)=>{
            return(
              <Book
              key={index+1}
              bookname={book.bookname}
              writer={book.writer}
              delete={()=>props.deleteBookState(index)}
              inputName={(event) =>props.changeWithInputState(event,index)}
              />
            );
            
          })
    )
    
}
export default BookList;