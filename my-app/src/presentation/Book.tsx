import React from 'react';
import { BookInterface } from '../hooks/useBooks';

const Book = ({id, title}:BookInterface) =>
{
 return <div key={id}>{title}</div>;
}

export default Book;