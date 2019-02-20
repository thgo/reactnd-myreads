import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Form, Message, Container } from "semantic-ui-react"
import ListBooks from "../book/ListBooks"
import * as BooksAPI from '../../api/BooksAPI'
import BackButton from './BackButton'
import { DebounceInput } from 'react-debounce-input'
import './search.css'

class Search extends Component {

  state = {
    books: [],
    isLoading: false,
    error: false,
    errorMessage: '',
    query: ''
  }

  /**
  * Seta no state os dados inseridos no campo de pesquisa
  **/
  onChangeText = event => {
    this.setState({
      query: event.target.value,
      isLoading: event.target.value !== ''
    })

    this.filterBooks(this.state.query)
  }

  handleSubmitForm = () => {
    const { query } = this.state

    if (query === '') return

    this.setState({
      isLoading: true
    })

    this.filterBooks(query)
  }

  /**
  * Método para filtrar os livros utilizando a API fornecida.
  * Se a pesquisa for vazia, a chamada à api não ocorrerá.
  * A resposta da pesquisa será tratada para verificar se o livro retornado já está adicionado á
  * alguma prateleira do usuário, se estiver, a propriedade 'shelf' será adicionada ao mesmo.
  **/
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

  /**
   * Passa o ID do livro retornado da pesquisa e verifica se ele está associado a alguma
   * prateleira, se tiver, retorna a prateleira do mesmo, caso contrário, retorna undefined.
   */
  getShelfFromBook = bookID => {
    const { books } = this.props
    const book = books.filter(book => book.id === bookID)
    if (book[0])
      return book[0].shelf
    return undefined
  }

  render() {

    const { shelfs, loading, handleChangeShelf } = this.props
    const { books, isLoading } = this.state

    return (
      <Container textAlign='left'>
        <BackButton />

        <Form autoComplete='off' error={this.state.error} loading={isLoading} onSubmit={this.handleSubmitForm} className='form-search'>
          <DebounceInput
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

Search.defaultProps = {
  loading: false
}

Search.propTypes = {
  shelfs: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
}

export default Search
