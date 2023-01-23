import React from 'react';
import logo from './logo.svg';
import './App.css';
import useBooks from './hooks/useBooks';
import Book from './presentation/Book';

function App() {
const books = useBooks();


const FormatBooks = (books : any) => 
{
  if(books != null && books.length > 0)
  {
       return books.map((x: { title: any; }) => <Book title={x.title} />);
  }
}


  return (
    <div className="App">
     
<FormatBooks books={books} />


    </div>
  );
}

export default App;
