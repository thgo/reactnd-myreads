import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Popup, Button } from "semantic-ui-react"

class Options extends Component {

  state = {
    currentShelf: ''
  }

  /**
   * Recupera a cor de acordo com a prateleira selecionada;
   * Green = Prateleira que o livro está associada
   * Grey = Outras prateleiras
   */
  handleButtonColor = thisShelf => {
    const { currentShelf } = this.state
    if (!currentShelf) return 'grey'
    return currentShelf === thisShelf.name ? 'green' : 'grey'
  }

  /**
   * Checa se a prateleira em que o livro está é igual à que está sendo passada por parâmetro,
   * caso positivo, desabilita a mesma.
   */
  handleDisableButton = thisShelf => {
    const { currentShelf } = this.state
    return currentShelf === thisShelf.name
  }

  /**
   * Atualiza a prateleira atual no state, para correto funcionamento do loading
   * e chama a função passada por parâmetro, para que o componente pai lide corretamente
   * com a requisição.
   */
  handleChangeShelfButton = (event, book, newShelf) => {
    event.preventDefault()
    const { handleChangeShelf } = this.props
    this.setState({ currentShelf: newShelf })
    handleChangeShelf(book, newShelf)
  }

  /**
   * Atualiza a estante atual quando clica no botão options.
   * Caso a página seja a Search, shelf não vai existir se o livro não estiver em nenhuma prateleira,
   * então, é retornado o default none
   */
  handleOpenPopup = (shelf) => {
    this.setState({ currentShelf: shelf ? shelf : 'none' })
  }

  render() {

    const { shelfs, book, loading } = this.props

    return (
      <Popup wide trigger={<Button color='blue' circular icon='cog' title='Options' onClick={() => this.handleOpenPopup(book.shelf)} />} on='click'>
        <Button.Group vertical labeled icon>
          {shelfs && shelfs.map(shelf => (
            <Button
              key={shelf.id}
              icon='check circle'
              name={shelf.name}
              loading={ loading && shelf.name === this.state.currentShelf }
              color={this.handleButtonColor(shelf)}
              disabled={this.handleDisableButton(shelf)}
              content={shelf.title}
              onClick={(event) => this.handleChangeShelfButton(event, book, shelf.name)}
            />
          ))}
        </Button.Group>
      </Popup>
    )
  }
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
