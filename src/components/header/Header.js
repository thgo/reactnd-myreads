import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Input } from 'semantic-ui-react';

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
          <Menu.Item header >
            My Reads
          </Menu.Item>
          <Menu.Item as={Link} content="Home" to="/" header />
          <Menu.Menu position='right'>
            <Menu.Item header>
              <Input icon='search' placeholder='Search...' onChange={this.onChangeText} value={searchText} />
            </Menu.Item>
            <Menu.Item as={Link} content="Search" to="/search" header />
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default Header
