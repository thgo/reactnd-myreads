import React, { Component } from 'react'
import {
  Container,
  CardDeck,
  Card,
  Row,
  Col,
  Image
} from 'react-bootstrap'
import * as BooksAPI from '../api/BooksAPI'

class ListBooks extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((res) => {
      this.setState((prevState) => ({
        books: res
      }))
    })
  }

  render() {

    const { books } = this.state

    return (
      <Container style={{marginTop: '2em'}}>
        <Row>
          <CardDeck>

            {books && books.map(book => (
              <Col xs={1} md={4} xl={4} style={{marginBottom: '2em'}} key={book.id}>
                <Card>
                  <Card.Img src={book.imageLinks.thumbnail} style={{maxHeight: '400px'}}>
                  </Card.Img>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </CardDeck>
        </Row>
      </Container>
    )

  }

}

export default ListBooks