import React from "react"
import ListBooks from "./book/ListBooks"
import { Grid, Card } from "semantic-ui-react";

const Shelf = props => {
  return (
    <Grid columns={3}>
      <Grid.Column>
        <Card
          className="text-center"
          style={{ marginBottom: "2em" }}
        >
          <Card.Content>
            <Card.Header as="h5">{props.title}</Card.Header>
            <ListBooks books={props.books} />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default Shelf
