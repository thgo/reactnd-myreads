import React from "react"
import PropTypes from 'prop-types'
import { Card, Image, Rating } from "semantic-ui-react";
import Options from '../options/Options'
import ModalDetails from "../search/ModalDetails";
import './book.css'

const BookCard = props => {

  const { book, shelfs, handleChangeShelf, loading } = props

  const getThumbnail = (book) => {
    if (book && book.imageLinks && book.imageLinks.smallThumbnail) {
      return book.imageLinks.smallThumbnail
    } else {
      return 'no-image.png'
    }
  }

  return (
    <Card className="text-center book-card" >
      <Image src={ getThumbnail(book) } />
      <Card.Content className='book-card-content'>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>
          { <span className="small text-muted"> {book.authors ? book.authors.join(', ') : 'Author not informed'} </span> }
        </Card.Meta>
      </Card.Content>
      <Card.Description>
        <Rating icon='star' defaultRating={book.averageRating} maxRating={5} disabled title={`Rating: ${book.averageRating ? book.averageRating : 0 }`} />
      </Card.Description>
      <Card.Content extra>
        <ModalDetails book={book} thumbnail={getThumbnail(book)} />
        &nbsp;
        <Options
          shelf={ book.shelf ? book.shelf : 'none' }
          shelfs={shelfs}
          book={book}
          loading={loading}
          handleChangeShelf={handleChangeShelf} />
      </Card.Content>
    </Card>
  )
}

BookCard.defaultProps = {
  isLoading: false
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  shelfs: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
}

export default BookCard
