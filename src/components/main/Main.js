import React, { Component } from 'react'
import * as BooksAPI from '../../api/BooksAPI'
import Shelf from '../Shelf';

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
      {
        id: 4,
        name: 'none',
        title: 'None'
      }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((res) => {
      this.updateState(res)
    })
  }

  updateBookShelf = (book, newShelf) => {
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
      read: this.filterShelf(books, 'read')
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
      <div>
        { shelfs.length && shelfs.map(shelf => (
            <Shelf
              key={shelf.id}
              books={this.state[shelf.name]}
              title={shelf.title}
              shelfs={shelfs}
              handleChangeShelf={this.updateBookShelf} />
          ))
        }
      </div>
    )
  }
}

export default Main
