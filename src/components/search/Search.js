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
      isLoading: true
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
    BooksAPI.search(query)
    .then((res) => {
      console.log(res)
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

  isEmptySearch = () => {
    return this.state.query === ''
  }

  render() {

    const { shelfs, loading, updateBookShelf } = this.props
    const { books, isLoading } = this.state

    return (
      <Container textAlign='left'>
        <BackButton />

        <Form autoComplete='off' error={this.state.error} loading={isLoading} onSubmit={this.filterBtnBooks} style={{width: '100%', marginTop: '2em'}}>
          <Form.Group>
            <DebounceInput
                className='ui input'
                placeholder="Enter search..."
                onChange={this.onChangeText}
                value={this.state.query}
                minLength={1}
                debounceTimeout={500}
            />
          </Form.Group>
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
            handleChangeShelf={updateBookShelf}/>
        }
      </Container>
    )
  }
}

export default Search;
