import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Search from './components/search/Search'
import * as BooksAPI from './api/BooksAPI'
import { shelfs } from './config/shelfs'
import NotFound from './components/notfound/NotFound'

class App extends Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    loading: false,
    loadingData: false
  }

  /**
  * Busca todos os livros que estão associados a alguma prateleira do usuário.
  **/
  componentWillMount() {
    this.setState({loadingData : true})
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({
      books,
      currentlyReading: this.filterShelf(books, 'currentlyReading'),
      wantToRead: this.filterShelf(books, 'wantToRead'),
      read: this.filterShelf(books, 'read'),
      loading: false,
      loadingData: false
    })
  }

  /**
  * Manipula a mudança de prateleira dos livros, atualizando o state da aplicação
  * e usando o método update, da API para atualizar a prateleira, no servidor.
  **/
  handleChangeBookShelf = (book, newShelf) => {
    this.setState({ loading: true })

    const oldShelf = book.shelf
    book.shelf = newShelf
    BooksAPI.update(book, newShelf)

    this.setState((state) => ({
      books: state.books?.filter(b => b.id === book.id)?.concat([ book ]),
      [newShelf]: state[newShelf]?.concat([ book ]),
      [oldShelf]: state[oldShelf]?.filter(b => b.id !== book.id),
      loading: false
    }))
  }

  /**
  * Atualiza as listas do state, filtrando os livros de cada categoria
  **/
  updateState(books) {
    this.setState({
      books,
      currentlyReading: this.filterShelf(books, 'currentlyReading'),
      wantToRead: this.filterShelf(books, 'wantToRead'),
      read: this.filterShelf(books, 'read'),
      loading: false,
      loadingData: false
    })
  }

  /**
  * Ordena os livros por ordem alfabética do título, dentro das prateleiras
  **/
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

    const { loading, loadingData } = this.state

    return (
      <div>
        <Dimmer active={loadingData}>
          <Loader>Loading</Loader>
        </Dimmer>
        <Header />

        <Container style={{ marginTop: '7em' }} textAlign='center'>
          <Switch>
            <Route exact path='/'
              render={() =>
                <Main
                  {...this.state}
                  shelfs={shelfs}
                  handleChangeShelf={this.handleChangeBookShelf} />
              } />

            <Route exact path='/search'
              render={() =>
                <Search
                  shelfs={shelfs}
                  {...this.state}
                  loading={loading}
                  handleChangeShelf={this.handleChangeBookShelf}
                />
              }
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App
