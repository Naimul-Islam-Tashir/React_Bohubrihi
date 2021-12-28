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
  changeBookState=(changeBookName)=>{
    this.setState(
      {
        books:
        [
          {bookname:changeBookName , writer:"fateha nasrin"},
          {bookname:"English" , writer:"Tushi"},
          {bookname:"Math" , writer:"naimul islam"}
        ]
      }
    )
  }
  changeWithInputState=(e)=>{
    this.setState(
      {
        books:
        [
          {bookname:e.target.value , writer:"fateha nasrin"},
          {bookname:"English" , writer:"Tushi"},
          {bookname:"Math" , writer:"naimul islam"}
        ]
      });
  }
  render(){
    return(
      <div className='app'>
        <h1>....Book list...</h1>
        <button onClick={ ()=>this.changeBookState("computer fundamantel")}>change Button</button>
        <input type="text" onChange={this.changeWithInputState}/>
        <Book
         name={this.state.books[0].bookname}
         writer={this.state.books[0].writer}
         inputName={this.changeWithInputState} />
        <Book
         name={this.state.books[1].bookname}
         writer={this.state.books[1].writer} />
        <Book 
         name={this.state.books[2].bookname}
         writer={this.state.books[2].writer }
         cange={this.changeBookState.bind(this,"graphics design")}/>
      </div>
    )
  }
}
export default App;
