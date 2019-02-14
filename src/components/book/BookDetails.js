import React, { Component } from 'react'
import { Header, Container, Image } from 'semantic-ui-react';
import * as BooksAPI from '../../api/BooksAPI'
import { Link } from 'react-router-dom'

class BookDetails extends Component {

  state = {
    book: {},
    isLoading: false
  }

  componentDidMount() {
    console.log('componentDidMount BookDetails')
    this.setState({ isLoading: true })
    this.loadBookById()
  }

  loadBookById = () => {
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

    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Image src={book.imageLinks.smallThumbnail} size="small" circular />
          <Header.Content>{book.title}</Header.Content>
        </Header>
        <Container text>
          <div>
            <p>{book.description}</p>
            <p><strong>Publish date:</strong> {book.publishedDate}</p>
            <p><strong>Author(s):</strong> {book.authors && book.authors.join(', ')}</p>
            <p><strong>Page number:</strong> {book.pageCount}</p>
          </div>

          <Link to="/" className="ui button primary" style={{float: 'right'}}>Back</Link>
        </Container>
      </div>
    )

  }

}

export default BookDetails
