import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Card } from 'react-bootstrap';

class Main extends Component {

  render() {
    return (
      <Container style={{height: '100%', verticalAlign: 'middle'}}>
        <Row>
          <Col xs={12} md={6} xl={4}>
            <Card border="primary" className="text-center" style={{marginBottom: '2em'}}>
              <Card.Header>Currently Reading</Card.Header>
              <Card.Body>
                <Card.Text>
                  Books I'm currently reading
                </Card.Text>
                <Button variant="outline-secondary">Visitar</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={4}>
            <Card border="warning" className="text-center" style={{marginBottom: '2em'}}>
              <Card.Header>Want to Read</Card.Header>
              <Card.Body>
                <Card.Text>
                  Books I'm want to read
                </Card.Text>
                <Button variant="outline-secondary">Visitar</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={4}>
            <Card border="success" className="text-center" style={{marginBottom: '2em'}}>
              <Card.Header>Read</Card.Header>
              <Card.Body>
                <Card.Text>
                  Books I'm read
                </Card.Text>
                <Button variant="outline-secondary">Visitar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Main
