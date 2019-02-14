import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Image } from "semantic-ui-react";
import Options from '../options/Options'

const BookCard = props => {
  return (
    <Card className="text-center" style={{height: '380px'}}>
      <Image src={props.book.imageLinks.smallThumbnail} style={{width: '50%', margin: '0 auto', height: '200px'}} />
      <Card.Content>
        <Card.Header>{props.book.title}</Card.Header>
        <Card.Meta>
          { <span className="small text-muted"> {props.book.authors ? props.book.authors.join(', ') : 'Author not informed'} </span> }
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Link
          to={`/book/${props.book.id}`}
          className="btn btn-outline-info">
            Details
        </Link>&nbsp;
        <Options shelf={props.book.shelf} shelfs={props.shelfs} />
      </Card.Content>
    </Card>
  )
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookCard
