import React from 'react'
import PropTypes from 'prop-types'
import { Card, Header, Container, Image } from 'semantic-ui-react'

const BookDetails = props => {

    const { book, thumbnail } = props

    return (
      <Card fluid>
        <Card.Content textAlign='center'>
          <Image src={thumbnail} size='small' rounded />
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
          </Container>
        </Card.Content>
      </Card>
    )

}

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
  thumbnail: PropTypes.string.isRequired
}

export default BookDetails
