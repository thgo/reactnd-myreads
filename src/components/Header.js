import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends Component {

  onChangeText = event => {
    const { handleSearchText } = this.props
    handleSearchText(event.target.value)
  }

  render() {

    const { searchText } = this.props

    return (
      <Container fluid style={{marginBottom: '2em', paddingLeft: '0', paddingRight: '0'}}>
        <Navbar bg="dark" expand="lg" variant="dark" className='sticky-top'>
          <Navbar.Brand>
            <Link to="/">
              My Reads
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#currentlyReading">Currently Reading</Nav.Link>
              <Nav.Link href="#wantToRead">Want to Read</Nav.Link>
              <Nav.Link href="#wantToRead">Read</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchText} onChange={this.onChangeText} />
              <Link to="/search" className="btn btn-outline-info">Search</Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default Header
