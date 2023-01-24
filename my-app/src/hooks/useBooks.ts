import React, { useEffect, useState } from 'react';


export interface BookInterface
{
  id: string;
  title: string;
}

export function useBooks() {
    const [books, setBooks] = useState<BookInterface[]>([]);
  

    useEffect(() => {
      fetch('https://fakerapi.it/api/v1/books?_quantity=3')
      .then(response => response.json())
      .then((response) => setBooks(response.data));
      
      
    
      }, []);
  
    return books;
  }
  