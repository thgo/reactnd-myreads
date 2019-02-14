import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Search from './components/search/Search'
import BookDetails from './components/book/BookDetails'

library.add(faArrowAltCircleLeft, faCheckCircle)

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
        <Route exact path='/' component={Main} searchText={''} />
        <Route path='/search'
          handleSearchText={this.handleSearchText}
          render={() => <Search searchText={searchText} handleSearchText={this.handleSearchText} />}
        />
        <Route path='/book/:id' component={BookDetails} />
      </div>
    )
  }
}

export default App
