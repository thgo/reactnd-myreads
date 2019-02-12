import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl
} from 'react-bootstrap'

const Header = () => {

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className='sticky-top'>
      <Navbar.Brand href="#home">My Reads</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#currentlyReading">Currently Reading</Nav.Link>
          <Nav.Link href="#wantToRead">Want to Read</Nav.Link>
          <Nav.Link href="#wantToRead">Read</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default Header