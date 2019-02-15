import React from 'react'
import BookCard from './BookCard';
import { Card } from 'semantic-ui-react';
import * as BooksAPI from '../../api/BooksAPI'

const ListBooks = props => {

  const handleChangeShelfList = (book, newShelf) => {
    const { handleChangeShelf } = props
    handleChangeShelf(book, newShelf)
  }

  const { books, shelfs } = props
  return (
    <Card.Group>
      {books && books.map(book => (
        <BookCard key={book.id} book={book} handleChangeShelf={handleChangeShelfList} shelfs={shelfs} />
      ))}
    </Card.Group>
  )

}

export default ListBooks
