import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { Form, Message, Container } from "semantic-ui-react"
import ListBooks from "../book/ListBooks"
import * as BooksAPI from '../../api/BooksAPI'
import BackButton from './BackButton'
import { DebounceInput } from 'react-debounce-input'
import './search.css'

function Search ({ shelfs, loading, handleChangeShelf }) {

  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')

  /**
  * Seta no state os dados inseridos no campo de pesquisa
  **/
  function handleTextChange (query) {
    setQuery(query)
  }

  useEffect(() => {
    if (query !== '') {
      filterBooks()
    }
  }, [query])

  function removeFromList (book, newShelf) {
    setBooks(books.filter(f => f.id !== book.id))
    handleChangeShelf(book, newShelf)
  }

  /**
  * Método para filtrar os livros utilizando a API fornecida.
  * Se a pesquisa for vazia, a chamada à api não ocorrerá.
  * A resposta da pesquisa será tratada para verificar se o livro retornado já está adicionado á
  * alguma prateleira do usuário, se estiver, a propriedade 'shelf' será adicionada ao mesmo.
  **/
  async function filterBooks () {
    setBooks([])
    setError(false)

    if (query === '') {
      setError(true)
      return
    }

    let shelfBook
    setIsLoading(true)

    await BooksAPI.search(query.trim())
      .then(res => {
        if (res && res.length) {
          res.map((book) => {
            shelfBook = getShelfFromBook(book.id)
            if (shelfBook) {
              book.shelf = shelfBook
            }
            return book
          })
          setBooks(res)
        } else {
          setError(true)
        }
      })
      .catch((res) => {
        setError(true)
        setBooks([])
      })
      setIsLoading(false)
  }

  /**
   * Passa o ID do livro retornado da pesquisa e verifica se ele está associado a alguma
   * prateleira, se tiver, retorna a prateleira do mesmo, caso contrário, retorna undefined.
   */
  function getShelfFromBook (bookID) {
    const book = books.filter(book => book.id === bookID)
    if (book[0])
      return book[0].shelf
    return undefined
  }

  return (
    <Container textAlign='left'>
      <BackButton />

      <Form
        autoComplete='off'
        error={error}
        loading={isLoading}
        className='form-search'
      >
        <DebounceInput
          placeholder="Enter search..."
          onChange={({ target }) => handleTextChange(target.value)}
          value={query}
          minLength={1}
          debounceTimeout={400}
        />
        { books && books.length > 0 && <p className='small'>{books.length} results found.</p> }
        <Message
          error
          header='Search error'
          content='No items found.'
        />
      </Form>

      {books && books.length > 0 &&
        <ListBooks
          books={books}
          shelfs={shelfs}
          loading={loading}
          handleChangeShelf={removeFromList}
        />
      }
    </Container>
  )
}

Search.defaultProps = {
  loading: false
}

Search.propTypes = {
  shelfs: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
}

export default Search
