import React from 'react'
import BookCard from './BookCard';
import { Card } from 'semantic-ui-react';

const ListBooks = props => {

  const handleChangeShelf = (book, newShelf) => {
    const { handleChangeShelf } = props
    handleChangeShelf(book, newShelf)
  }

  const { books, shelfs, loading } = props
  return (
    <Card.Group centered>
      {books && books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          loading={loading}
          handleChangeShelf={handleChangeShelf}
          shelfs={shelfs} />
      ))}
    </Card.Group>
  )

}

export default ListBooks
