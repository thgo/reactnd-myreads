import React from 'react'
import { Button } from 'semantic-ui-react'
import * as BooksAPI from '../../api/BooksAPI'

const ButtonOption = props => {

  const handleChangeShelfButtonOption = (book, newShelf) => {
    const { handleChangeShelf } = props
    handleChangeShelf(book, newShelf)
  }

  const {shelf, color, disabled, book } = props
  console.log(props)

  return (
    <Button
      icon='check circle'
      name={shelf.name}
      color={color}
      disabled={disabled}
      content={shelf.title}
      onClick={(event) => handleChangeShelfButtonOption(book, shelf.name)}
    />
  )
}

export default ButtonOption
