import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { Popup, Button } from "semantic-ui-react"

function Options ({ shelfs, book, loading, handleChangeShelf }) {

  const [currentShelf, setCurrentShelf] = useState(null)

  /**
   * Recupera a cor de acordo com a prateleira selecionada;
   * Green = Prateleira que o livro está associada
   * Grey = Outras prateleiras
   */
  function handleButtonColor (thisShelf) {
    if (!currentShelf) return 'grey'
    return currentShelf === thisShelf.name ? 'green' : 'grey'
  }

  /**
   * Checa se a prateleira em que o livro está é igual à que está sendo passada por parâmetro,
   * caso positivo, desabilita a mesma.
   */
  function handleDisableButton (thisShelf) {
    return currentShelf === thisShelf.name
  }

  /**
   * Atualiza a prateleira atual no state, para correto funcionamento do loading
   * e chama a função passada por parâmetro, para que o componente pai lide corretamente
   * com a requisição.
   */
  function handleChangeShelfButton (event, book, newShelf) {
    event.preventDefault()
    setCurrentShelf(newShelf)
    handleChangeShelf(book, newShelf)
  }

  /**
   * Atualiza a estante atual quando clica no botão options.
   * Caso a página seja a Search, shelf não vai existir se o livro não estiver em nenhuma prateleira,
   * então, é retornado o default none
   */
  function handleOpenPopup (shelf) {
    setCurrentShelf(shelf ? shelf : 'none')
  }

  return (
    <Popup
      wide
      trigger={
        <Button
          color='blue'
          circular
          icon='cog'
          title='Options'
          onClick={() => handleOpenPopup(book.shelf)}
        />
      }
      on='click'
    >
      <Button.Group vertical labeled icon>
        {shelfs && shelfs.map(shelf => (
          <Button
            key={shelf.id}
            icon='check circle'
            name={shelf.name}
            loading={ loading && shelf.name === currentShelf }
            color={handleButtonColor(shelf)}
            disabled={handleDisableButton(shelf)}
            content={shelf.title}
            onClick={(event) => handleChangeShelfButton(event, book, shelf.name)}
          />
        ))}
      </Button.Group>
    </Popup>
  )
}

Options.defaultProps = {
  loading: false
}

Options.propTypes = {
  handleChangeShelf: PropTypes.func.isRequired,
  shelfs: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired
}

export default Options
