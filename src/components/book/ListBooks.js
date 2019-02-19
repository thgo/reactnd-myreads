import React from 'react'
import BookCard from './BookCard';
import { Card, Container } from 'semantic-ui-react';

const ListBooks = props => {

  const { books, shelfs, loading, handleChangeShelf } = props

  return (
    <Container textAlign='center'>
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
    </Container>
  )

}

export default ListBooks
