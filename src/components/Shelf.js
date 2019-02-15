import React from "react"
import ListBooks from "./book/ListBooks"
import { Card } from "semantic-ui-react";

const Shelf = props => {

  const { title, books, shelfs, handleChangeShelf } = props

  return (
    <Card fluid
      className="text-center"
      style={{ marginBottom: '2em'}}
    >
      <Card.Content>
        <Card.Header as="h5" textAlign="center">{title}</Card.Header>
        <ListBooks books={books} shelfs={shelfs} handleChangeShelf={handleChangeShelf} />
      </Card.Content>
    </Card>
  )
}

export default Shelf
