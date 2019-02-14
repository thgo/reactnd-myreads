import React from "react"
import PropTypes from 'prop-types'
import { Card, Button, OverlayTrigger, Popover, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

const options = (
  <Popover id="options" title="Move to..." style={{boxShadow: '10px 10px 20px #999'}}>
    <ListGroup>
      <ListGroup.Item action> Currently Reading </ListGroup.Item>
      <ListGroup.Item action> Want to Read </ListGroup.Item>
      <ListGroup.Item action> Read </ListGroup.Item>
      <ListGroup.Item action> None </ListGroup.Item>
    </ListGroup>
  </Popover>
)

const BookCard = props => {
  return (
    <Card className="text-center" style={{display: 'flex', height: '380px'}}>
      <Card.Img
        variant="top"
        src={props.book.imageLinks.smallThumbnail}
        style={{ maxHeight: "200px", width: "50%", margin: "0 auto" }}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          { <span className="small text-muted"> {props.book.authors ? props.book.authors.join(', ') : 'Author not informed'} </span> }
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          to={`/book/${props.book.id}`}
          params={{...props.book}}
          variant="outline-info"
          className="btn btn-outline-info"
        >Details</Link>&nbsp;
        <OverlayTrigger trigger="click" placement="right" overlay={options}>
          <Button variant="outline-primary">...</Button>
        </OverlayTrigger>
      </Card.Footer>
    </Card>
  )
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookCard
