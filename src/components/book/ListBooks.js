import React from 'react'
import PropTypes from 'prop-types'
import BookCard from './BookCard'
import { Card, Container } from 'semantic-ui-react'

const ListBooks = props => {

  const { books, shelfs, loading, handleChangeShelf } = props

  return (
    <Container textAlign='center'>
      <Card.Group centered>
        {books && books.length > 0 && books.map(book => (
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

ListBooks.defaultProps = {
  books: [],
  loading: false
}

ListBooks.propTypes = {
  shelfs: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
}

export default ListBooks
