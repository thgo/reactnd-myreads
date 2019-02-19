import React, { Component } from "react"
import { Popup, Button } from "semantic-ui-react"

class Options extends Component {

  state = {
    currentShelf: ''
  }

  /**
   * Get the color of selected shelf
   */
  handleButtonColor = thisShelf => {
    const { currentShelf } = this.state
    if (!currentShelf) return 'grey'
    return currentShelf === thisShelf.name ? 'green' : 'grey'
  }

  /**
   * Check if the current shelf is the same as the button, if true, disables it
   */
  handleDisableButton = thisShelf => {
    const { currentShelf } = this.state
    return currentShelf === thisShelf.name
  }

  /**
   * Set the newShelf in the state, for loading property.
   * Call the method handleChangeShelf
   */
  handleChangeShelfButton = (event, book, newShelf) => {
    event.preventDefault()
    const { handleChangeShelf } = this.props

    this.setState({ currentShelf: newShelf })

    handleChangeShelf(book, newShelf)
  }

  handleOpenPopup = (shelf) => {
    this.setState({ currentShelf: shelf ? shelf : 'none' })
  }

  render() {

    const { shelfs, book, loading } = this.props

    return (
      <Popup wide trigger={<Button primary icon='cog' title='Options' onClick={() => this.handleOpenPopup(book.shelf)} />} on='click'>
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

export default Options
