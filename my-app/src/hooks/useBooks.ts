import React from 'react';

export default function useBooks() {
    const [books, setBooks] = React.useState(null);
  
    React.useEffect(() => {
      fetch('https://fakerapi.it/api/v1/books?_quantity=3')
        .then((res) => res.json())
        .then((res) => setBooks(res.listings));
    }, []);
  
    return books;
  }
  