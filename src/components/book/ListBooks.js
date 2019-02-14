import React, { Component } from 'react'
import BookCard from './BookCard';
import { Card } from 'semantic-ui-react';

class ListBooks extends Component {

  state = {
    books: []
  }

  render() {

    const { books } = this.props

    return (
      <Card.Group>
        {books && books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </Card.Group>
    )

  }

}

export default ListBooks