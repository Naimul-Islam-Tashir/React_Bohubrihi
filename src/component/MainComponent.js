import React, { Component } from "react";
import bookList from '../assets/books'
import BookList from "./lists/BookList";

class MainComponent extends Component{
    state ={
        books:bookList,
        showToggle:true
      }
    
      changeWithInputState=(event,index)=>{
        const book={
          ...this.state.books[index] //jei boi er index sheta book a save hoye jabe.
        }
        book.bookname=event.target.value; //input theke value take book er objecet er booknamer property ke updated kora
        const books=[...this.state.books]; // books object er akta copy books insert kora holo
        books[index]=book;
        this.setState({books : books})
      }
      deleteBookState = index => {
        //const books = this.state.books.slice(); array copy
        //const books = this.state.books.map(item => item); array copy
        const dbooks = [...this.state.books];
        dbooks.splice(index, 1);//main array change kore dhey tai array take copy kore nite hobe
        this.setState({
          books: dbooks
        });
      };
      toggleBooks=()=>{
        this.setState({showToggle:!this.state.showToggle})
      }
      render(){
        let books=null;
        if(this.state.showToggle){
          books=<BookList books={this.state.books}
           deleteBookState={this.deleteBookState}
           changeWithInputState={this.changeWithInputState} />
        }
        return(
          <div className='app'>
            <h1>....Book list...</h1>
            <button onClick={this.toggleBooks}>Toggle List</button>
            {books}
          </div>
        )
      }
}
export default MainComponent;