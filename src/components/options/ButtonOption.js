import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonOption = props => {

  const {shelf, color, disabled, book, loading, handleChangeShelf } = props

  // const handleChangeShelfButtonOption = (book, newShelf) => {
  //   const { handleChangeShelf } = props
  //   handleChangeShelf(book, newShelf)
  // }

  return (
    <Button
      icon='check circle'
      name={shelf.name}
      loading={loading}
      color={color}
      disabled={disabled}
      content={shelf.title}
      onClick={(event) => handleChangeShelf(event, book, shelf.name)}
    />
  )
}

export default ButtonOption
