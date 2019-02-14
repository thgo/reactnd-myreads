import React from "react"
import { Popover, ListGroup } from "react-bootstrap"

const Options = () => {
  return (
    <Popover title="Move to..." style={{boxShadow: '10px 10px 20px #999'}}>
      <ListGroup>
        <ListGroup.Item action> Currently Reading </ListGroup.Item>
        <ListGroup.Item action> Want to Read </ListGroup.Item>
        <ListGroup.Item action> Read </ListGroup.Item>
        <ListGroup.Item action> None </ListGroup.Item>
      </ListGroup>
    </Popover>
  )
}

export default Options
