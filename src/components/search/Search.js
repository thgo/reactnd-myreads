import React, { Component } from "react";
import { Form, Input, Icon, Message, Button, Container } from "semantic-ui-react";
import ListBooks from "../book/ListBooks";
import * as BooksAPI from '../../api/BooksAPI'
import BackButton from './BackButton'

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
      query: event.target.value
    })

  }

  filterBtnBooks = event => {
    event.preventDefault()

    const { query } = this.state

    this.setState({
      isLoading: true
    })

    this.filterBooks(query)
  }

  filterBooks = query => {
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

    const { query } = this.props
    const { books, isLoading } = this.state

    return (
      <Container textAlign='left'>
        <BackButton />

        <Form autoComplete='off' error={this.state.error} loading={isLoading} onSubmit={this.filterBtnBooks} style={{width: '100%', marginTop: '2em'}}>
          <Form.Group>
            <Input
              placeholder='Enter search...'
              name='search'
              value={query}
              onChange={this.onChangeText}
              icon={<Button disabled={this.isEmptySearch()}><Icon name='search' inverted circular link /></Button>}
              style={{width: '100%'}}
            />
          </Form.Group>
          <Message
            error
            header='Search error'
            content='No items found.'
          />

        </Form>

        {books && <ListBooks books={books} />}
      </Container>
    )
  }
}

export default Search;
