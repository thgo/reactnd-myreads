import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react';

const BackButton = () => {

  return (
    <Button animated as={Link} to='/'>
      <Button.Content visible>
        <Icon name='arrow alternate circle left' />
      </Button.Content>
      <Button.Content hidden>Back</Button.Content>
    </Button>
  )
}

export default BackButton
