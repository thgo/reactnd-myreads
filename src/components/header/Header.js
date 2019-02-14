import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Button, Icon } from 'semantic-ui-react';

class Header extends Component {

  onChangeText = event => {
    const { handleSearchText } = this.props
    handleSearchText(event.target.value)
  }

  render() {

    const { searchText } = this.props

    return (

      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Link to="/">My Reads</Link>
          </Menu.Item>
          <Menu.Item position='right'>
              <Link to="/search">Search</Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header
