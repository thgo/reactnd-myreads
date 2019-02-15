import React, { Component } from 'react'
import { Card, Header, Container, Image } from 'semantic-ui-react';
import * as BooksAPI from '../../api/BooksAPI'
import { Link } from 'react-router-dom'

class BookDetails extends Component {

  state = {
    book: undefined,
    isLoading: false
  }

  componentDidMount() {
    console.log('componentDidMount BookDetails')
    this.setState({ isLoading: true })

    const { id } = this.props.match.params

    BooksAPI.get(id)
    .then((res) => {
      console.log('res: ' + res)
      this.setState({
        book: res,
        isLoading: false
      })
    })
  }

  render () {
    const { book } = this.state

    //TODO: refact this and discover the error and why book is undefined in the first component call
    if (!book) return <div>TESTE</div>

    return (
      <Card fluid>
        <Card.Content textAlign='center'>
          <Image src={book.imageLinks.thumbnail} size='small' rounded />
          <Header as='h2' icon textAlign='center'>
            <Header.Content>{book.title}</Header.Content>
          </Header>
          <Container text textAlign='justified'>
            <div>
              <p>{book.description}</p>
              <p><strong>Publish date:</strong> {book.publishedDate}</p>
              <p><strong>Author(s):</strong> {book.authors && book.authors.join(', ')}</p>
              <p><strong>Page number:</strong> {book.pageCount}</p>
            </div>

            <Link to="/" className="ui button primary" style={{float: 'right'}}>Back</Link>
          </Container>
        </Card.Content>
      </Card>
    )
  }

}

export default BookDetails
