import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Image, Button } from "semantic-ui-react";

const BookCard = props => {
  return (
    <Card className="text-center" style={{display: 'flex', height: '380px'}}>
      <Image src={props.book.imageLinks.smallThumbnail} />
      <Card.Content>
        <Card.Header>{props.book.title}</Card.Header>
        <Card.Meta>
          { <span className="small text-muted"> {props.book.authors ? props.book.authors.join(', ') : 'Author not informed'} </span> }
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Link
          to={`/book/${props.book.id}`}
          params={{...props.book}}
          className="btn btn-outline-info"
        >Details</Link>&nbsp;
        <Button primary>...</Button>
      </Card.Content>
    </Card>
  )
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookCard
