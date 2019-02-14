import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Search from './components/search/Search'
import BookDetails from './components/book/BookDetails'

class App extends Component {

  state = {
    searchText: ''
  }

  handleSearchText = text => {
    this.setState({
      searchText: text
    })
  }

  render() {
    const { searchText } = this.state

    return (
      <div>
        <Header handleSearchText={this.handleSearchText} />

        <Container style={{ marginTop: '7em' }} textAlign='center'>
          <Route exact path='/' component={Main} searchText={''} />
          <Route path='/search'
            handleSearchText={this.handleSearchText}
            render={() => <Search searchText={searchText} handleSearchText={this.handleSearchText} />}
          />
          <Route path='/book/:id' render={() => <BookDetails />} />
        </Container>
      </div>
    )
  }
}

export default App
