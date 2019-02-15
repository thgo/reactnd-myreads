import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Image } from "semantic-ui-react";
import Options from '../options/Options'

const BookCard = props => {

  const { book, shelfs, handleChangeShelf } = props

  const handleChangeShelfOptions = (book, newShelf) => {
    handleChangeShelf(book, newShelf)
  }

  return (
    <Card className="text-center" style={{height: '380px'}}>
      <Image src={book.imageLinks.smallThumbnail} style={{width: '50%', margin: '0 auto', height: '200px'}} />
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>
          { <span className="small text-muted"> {book.authors ? book.authors.join(', ') : 'Author not informed'} </span> }
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Link
          to={`/book/${book.id}`}
          className="btn btn-outline-info">
            Details
        </Link>&nbsp;
        <Options shelf={book.shelf} shelfs={shelfs} book={book} handleChangeShelf={handleChangeShelfOptions} />
      </Card.Content>
    </Card>
  )
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookCard
