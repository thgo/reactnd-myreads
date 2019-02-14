import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import * as BooksAPI from '../../api/BooksAPI'
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'

class BookDetails extends Component {

  state = {
    book: {},
    isLoading: false
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.loadBookById()
  }

  loadBookById = () => {
    const { id } = this.props.match.params
    BooksAPI.get(id)
    .then((res) => {
      this.setState({
        book: res,
        isLoading: false
      })
    })
  }

  render () {

    const { book, isLoading } = this.state

    return (
      <Container>
        <Row>
          <Col xs={12}>
           {isLoading ?
            <div style={{margin: '0 auto'}}><ReactLoading type={'spinningBubbles'} /></div>
            :
            <Card className="text-justify">
              <Card.Header>
                <Card.Title>{book.title}</Card.Title>
              </Card.Header>
              <Card.Body>

                <Card.Subtitle className="mb-2 text-muted">{book.subtitle}</Card.Subtitle>
                <Card.Text>
                  <div>
                    <p>{book.description}</p>
                    <p><strong>Publish date:</strong> {book.publishedDate}</p>
                    <p><strong>Author(s):</strong> {book.authors && book.authors.join(', ')}</p>
                    <p><strong>Page number:</strong> {book.pageCount}</p>
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/" className="btn btn-outline-info" style={{float: 'right'}}>Back</Link>
              </Card.Footer>
            </Card>
          }
          </Col>
        </Row>
      </Container>
    )

  }

}

BookDetails.propTypes = {
  //book: PropTypes.object.isRequired
}

export default BookDetails