import React ,{ Component } from 'react';
import './App.css';
import Book from './component/Book'

// function component
// function App() {
//   return (
//     <div>
//       <h1>tashir  ahmed</h1>
//       <Person />
//       <School />
//     </div>
//   );
// }
 //class component
class App extends Component{
  state ={
    books:
          [
            {bookname:"Bangla" , writer:"fateha nasrin"},
            {bookname:"English" , writer:"Tushi"},
            {bookname:"Math" , writer:"tashir ahmed"}
          ]
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
  render(){
    const booksState=this.state.books;
    const books=booksState.map((book , index)=>{
      return(
        <Book
        key={index+1}
        bookname={book.bookname}
        writer={book.writer}
        delete={() => this.deleteBookState(index)}
        inputName={(event) =>this.changeWithInputState(event,index)}
        />
      );
      
    });
    return(
      <div className='app'>
        <h1>....Book list...</h1>
        {books}
      </div>
    )
  }
}
export default App;
