import React from "react"
import { Col, Card } from "react-bootstrap"
import ListBooks from "./ListBooks"

const Shelf = props => {
  return (
    <Col xs={12} md={12} xl={12}>
      <Card
        className="text-center"
        style={{ marginBottom: "2em" }}
      >
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <ListBooks books={props.books} />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Shelf
