import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonOption = props => {
  return (
    <Button
      icon='check circle'
      color={props.color}
      disabled={props.disabled}
      content={props.content}
    />
  )
}

export default ButtonOption
