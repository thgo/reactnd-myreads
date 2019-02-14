import React, { Component } from "react";
import { Form, Input, Icon, Message } from "semantic-ui-react";
import ListBooks from "../book/ListBooks";
import * as BooksAPI from '../../api/BooksAPI'
import { Link } from 'react-router-dom'

class Search extends Component {

  constructor (props) {
    super(props)

    this.state = {
      books: [],
      isLoading: false,
      error: false,
      errorMessage: '',
      query: props.searchText && props.searchText !== '' ? props.searchText : ''
    }

    this.filterBooks = this.filterBooks.bind(this)

    if (this.state.query !== '') {
      this.filterBooks(this.state.query)
    }
  }

  onChangeText = event => {
    this.props.handleSearchText(event.target.value)
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
    BooksAPI.search(query)
    .then((res) => {
      console.log(res)
      this.setState({
        books: res.error ? res.items : res,
        error: res.error ? true : false,
        isLoading: false
      })
    })
  }

  render() {

    const { searchText } = this.props
    const { books, isLoading } = this.state

    return (
      <div>
        <Form loading={isLoading} onSubmit={this.filterBtnBooks} style={{width: '100%'}}>
          <Form.Group>
            <Input
              placeholder='Enter search...'
              name='search'
              value={searchText}
              onChange={this.onChangeText}
              icon={<Icon name='search' inverted circular link />}
              style={{width: '100%'}}
            />
          </Form.Group>
          <Message
            error
            header='Erro ao pesquisar'
            content='Nenhum item encontrado'
          />

          <Link to="/"> Voltar </Link>
        </Form>

        <ListBooks books={books} />
      </div>
    )
  }
}

export default Search;
