import React, { Component } from 'react'
import * as BooksAPI from '../../api/BooksAPI'
import Shelf from '../shelf/Shelf';
import { shelfs } from './../../config/shelfs'

class Main extends Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    loading: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((res) => {
      this.updateState(res)
    })
  }

  updateBookShelf = (book, newShelf) => {
    this.setState({ loading: true })

    BooksAPI.update(book, newShelf)
    .then(res => {
      BooksAPI.getAll()
      .then(res => {
        this.updateState(res)
      })
    })
  }

  updateState(books) {
    this.setState({
      books,
      currentlyReading: this.filterShelf(books, 'currentlyReading'),
      wantToRead: this.filterShelf(books, 'wantToRead'),
      read: this.filterShelf(books, 'read'),
      loading: false
    })
  }

  filterShelf = (list, shelf) => {
    if (!list)
      return []

    return list.filter(book => book.shelf === shelf).sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    })
  }

  render() {

    const { loading } = this.state

    return (
      <div>
        { shelfs && shelfs.map(shelf => (
            <Shelf
              key={shelf.id}
              color={shelf.color}
              books={this.state[shelf.name]}
              title={shelf.title}
              shelfs={shelfs}
              loading={loading}
              handleChangeShelf={this.updateBookShelf} />
          ))
        }
      </div>
    )
  }
}

export default Main
