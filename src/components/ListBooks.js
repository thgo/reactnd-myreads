import React, { Component } from 'react'
import {
  CardDeck,
  Col
} from 'react-bootstrap'
import BookCard from './BookCard';

class ListBooks extends Component {

  state = {
    books: []
  }

  render() {

    const { books } = this.props

    return (
      <CardDeck>
        {books.length && books.map(book => (
          <Col xs={1} md={4} xl={4} style={{marginBottom: '2em'}} key={book.id}>
            <BookCard book={book} />
          </Col>
        ))}
      </CardDeck>
    )

  }

}

export default ListBooks