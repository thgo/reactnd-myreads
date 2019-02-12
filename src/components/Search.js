import React, { Component } from "react";
import { Container, Row, Col, Form, FormControl, InputGroup, Button, Alert } from "react-bootstrap";
import ListBooks from "./ListBooks";
import * as BooksAPI from '../api/BooksAPI'
import ReactLoading from 'react-loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class Search extends Component {

  constructor (props) {
    super(props)

    this.state = {
      books: [],
      isLoading: false,
      error: false,
      errorMessage: '',
      query: props.searchText && props.searchText !== '' ? props.searchText : ''
    }

    this.filterBooks = this.filterBooks.bind(this)

    if (this.state.query !== '') {
      this.filterBooks(this.state.query)
    }
  }

  onChangeText = event => {
    this.props.handleSearchText(event.target.value)
    this.setState({
      query: event.target.value
    })

  }

  filterBtnBooks = event => {
    event.preventDefault()

    const { query } = this.state

    this.setState({
      isLoading: true
    })

    this.filterBooks(query)
  }

  filterBooks = query => {
    BooksAPI.search(query)
    .then((res) => {
      console.log(res)
      this.setState({
        books: res.error ? res.items : res,
        error: res.error ? true : false,
        isLoading: false
      })
    })
  }

  render() {

    const { searchText } = this.props
    const { books, isLoading } = this.state

    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Form onSubmit={this.filterBtnBooks}>
              <InputGroup className="mb-3">
                <InputGroup.Append>
                  <Link to="/" style={{marginRight: '0.5em'}}>
                    <FontAwesomeIcon icon="arrow-alt-circle-left" size="2x" color="white"/>
                  </Link>
                </InputGroup.Append>
                <FormControl
                  placeholder="Enter Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={searchText}
                  onChange={this.onChangeText}
                />
                <InputGroup.Append>
                  <Button variant="primary" type='submit' disabled={searchText === ''}>Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          {!isLoading ? ((searchText !== '' && books) && <ListBooks books={books} />) : <ReactLoading type={'spinningBubbles'} />}
          { this.state.error && <Alert variant='danger'>Nenhum item encontrado</Alert>}
        </Row>
      </Container>
    );
  }
}

export default Search;
