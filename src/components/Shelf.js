import React from "react"
import ListBooks from "./book/ListBooks"
import { Card } from "semantic-ui-react";

const Shelf = props => {
  return (
    <Card fluid
      className="text-center"
      style={{ marginBottom: '2em'}}
    >
      <Card.Content>
        <Card.Header as="h5" textAlign="center">{props.title}</Card.Header>
        <ListBooks books={props.books} shelfs={props.shelfs} />
      </Card.Content>
    </Card>
  )
}

export default Shelf
