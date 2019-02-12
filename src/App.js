import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Search from './components/Search'

library.add(faArrowAltCircleLeft)

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
      </div>
    )
  }
}

export default App
