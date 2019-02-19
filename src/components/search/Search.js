import React, { Component } from "react";
import { Form, Message, Container } from "semantic-ui-react";
import ListBooks from "../book/ListBooks";
import * as BooksAPI from '../../api/BooksAPI'
import BackButton from './BackButton'
import { DebounceInput } from 'react-debounce-input';

class Search extends Component {

  state = {
    books: [],
    isLoading: false,
    error: false,
    errorMessage: '',
    query: ''
  }

  onChangeText = event => {
    this.setState({
      query: event.target.value,
      isLoading: event.target.value !== ''
    })

    this.filterBooks(this.state.query)
  }

  filterBtnBooks = event => {
    event.preventDefault()

    const { query } = this.state

    this.setState({
      isLoading: true
    })

    this.filterBooks(query)
  }

  filterBooks = (query) => {
    this.setState({ books: [], error: false })
    let shelfBook

    if (query !== '') {
      BooksAPI.search(query.trim())
      .then((res) => {

        if (res && res.length) {
           res.forEach((book) => {
            shelfBook = this.getShelfFromBook(book.id)
            if (shelfBook) {
              book.shelf = shelfBook
            }
          })
        }

        this.setState({
          books: res.error ? res.items : res,
          error: res.error ? true : false,
          isLoading: false
        })
      })
      .catch((res) => this.setState({
        isLoading: false,
        error: true,
        errorMessage: res
      }))
    }
  }

  getShelfFromBook = bookID => {
    const { books } = this.props
    const book = books.filter(book => book.id === bookID)
    if (book[0])
      return book[0].shelf
    return undefined
  }

  isEmptySearch = () => {
    return this.state.query === ''
  }

  render() {

    const { shelfs, loading, handleChangeShelf } = this.props
    const { books, isLoading } = this.state

    return (
      <Container textAlign='left'>
        <BackButton />

        <Form autoComplete='off' error={this.state.error} loading={isLoading} onSubmit={this.filterBtnBooks} style={{width: '100%', marginTop: '2em', textAlign: 'center'}}>
          <DebounceInput
              className='ui input'
              placeholder="Enter search..."
              onChange={this.onChangeText}
              value={this.state.query}
              minLength={1}
              debounceTimeout={500}
          />
          { books && books.length > 0 && <p className='small'>{books.length} results found.</p> }
          <Message
            error
            header='Search error'
            content='No items found.'
          />
        </Form>

        {books &&
          <ListBooks
            books={books}
            shelfs={shelfs}
            loading={loading}
            handleChangeShelf={handleChangeShelf}/>
        }
      </Container>
    )
  }
}

export default Search;
