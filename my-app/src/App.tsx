import React from 'react';
import './App.css';
import {useBooks, BookInterface} from './hooks/useBooks';
import Book from './presentation/Book';

function App() {
const books = useBooks();

const FormatBooks = (books : BookInterface[]) : any => 
{

if(books === undefined || books.length === 0)
{
  return <div>Empty</div>;
}

  return books.map((x : BookInterface) => {return <Book key={x.id} id={x.id} title={x.title} />});
}


  return (
    <div className="App">
     
 {FormatBooks(books)}

    </div>
  );
}

export default App;
