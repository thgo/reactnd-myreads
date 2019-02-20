import React from "react"
import ListBooks from "../book/ListBooks"
import { Card } from "semantic-ui-react"

const Shelf = props => {

  const { title, color, books, shelfs, handleChangeShelf, loading } = props

  return (
    <div>
    { books &&
      <Card fluid color={color}
        className="text-center"
        style={{ marginBottom: '2em'}}
      >
        <Card.Content textAlign="center">
          <Card.Header>{title}</Card.Header>
        </Card.Content>
        <Card.Content>
          {books && books.length > 0 &&
            <ListBooks
              books={books}
              shelfs={shelfs}
              loading={loading}
              handleChangeShelf={handleChangeShelf} />
          }
          {(!books || books.length === 0) && <div>No books found</div>}
        </Card.Content>
      </Card>
    }
    </div>
  )
}

export default Shelf
