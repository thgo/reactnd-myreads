import React from 'react'
import BookCard from './BookCard';
import { Card } from 'semantic-ui-react';

const ListBooks = props => {

  const { books } = props

  return (
    <Card.Group>
      {books && books.map(book => (
        <BookCard key={book.id} book={book} shelfs={props.shelfs} />
      ))}
    </Card.Group>
  )

}

export default ListBooks
