import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class BookShelf extends Component {
  render() {

    const { title, description } = this.props

    return (
        <Col xs={12} md={6} xl={4}>
          <Card
            border="primary"
            className="text-center"
            style={{ marginBottom: "2em" }}
          >
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Button variant="outline-secondary">Visitar</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default BookShelf;
