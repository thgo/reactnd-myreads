import React, { Component } from 'react'
import {
  Container,
  Row} from 'react-bootstrap';
import * as BooksAPI from '../api/BooksAPI'
import Shelf from './Shelf';

class Main extends Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  // TODO: refact this for another location
  getShelfs = () => {
    return [
      {
        id: 1,
        name: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        id: 2,
        name: 'wantToRead',
        title: 'Want to Read'
      },
      {
        id: 3,
        name: 'read',
        title: 'Read'
      },
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((res) => {
      this.setState({
        books: res,
        currentlyReading: this.filterShelf(res, 'currentlyReading'),
        wantToRead: this.filterShelf(res, 'wantToRead'),
        read: this.filterShelf(res, 'read')
      })
    })
  }

  filterShelf = (list, shelf) => {
    if (!list)
      return []

    return list.filter(book => book.shelf === shelf)
  }

  render() {

    const shelfs = this.getShelfs()

    return (
      <Container>
        <Row>
          { shelfs.length && shelfs.map(shelf => (
            <Shelf key={shelf.id} books={this.state[shelf.name]} title={shelf.title} />
          )) }

        </Row>
      </Container>
    )
  }
}

export default Main
