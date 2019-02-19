import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Search from './components/search/Search'
import * as BooksAPI from './api/BooksAPI'
import { shelfs } from './config/shelfs'

/**
 * A fazer
 * Configurar lista de botões na tela de search, para marcar com a cor o item quando for adicionado em alguma categoria;
 *
 * Não recarregar a lista de books ao colocar o livro na tela de search
 *
 * Details, na tela de search não pode mandar pra tela inicial, tem que voltar pra search e com a lista preenchida
 *
 * alterar botão do details no book card
 *
 * Fazer testes
 */
class App extends Component {

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

  handleChangeBookShelf = (book, newShelf) => {
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
        <Header />

        <Container style={{ marginTop: '7em' }} textAlign='center'>
          <Route exact path='/'
            render={() =>
              <Main
                {...this.state}
                shelfs={shelfs}
                handleChangeShelf={this.handleChangeBookShelf} />
            } />

          <Route path='/search'
            render={() =>
              <Search
                shelfs={shelfs}
                {...this.state}
                loading={loading}
                handleChangeShelf={this.handleChangeBookShelf}
              />
            }
          />
        </Container>
      </div>
    )
  }
}

export default App
