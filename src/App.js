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
    isLoadingApp: true
  }

  componentWillMount() {
    this.setState({ isLoadingApp: true })
  }

  componentDidMount() {
    this.setState({ isLoadingApp: false })
  }

  render() {

    return (
      <div>
        <Header />

        <Container style={{ marginTop: '7em' }} textAlign='center'>
          <Route exact path='/' component={Main} handleLoadingApp={this.handleLoadingApp} />
          <Route path='/search'
            render={() => <Search handleSearchText={this.handleSearchText} />}
          />
          <Route path='/book/:id' component={BookDetails} />
        </Container>
      </div>
    )
  }
}

export default App
