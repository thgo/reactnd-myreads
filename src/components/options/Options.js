import React, { Component } from "react"
import { Popup, Button } from "semantic-ui-react"
import ButtonOption from './ButtonOption'

class Options extends Component{

  state = {
    newShelf: ''
  }

  /**
   * Get the color of selected shelf
   */
  handleButtonColor = thisShelf => {
    const { shelf } = this.props
    if (!shelf) return 'grey'

    return shelf === thisShelf.name ? 'green' : 'grey'
  }

  /**
   * Check if the current shelf is the same as the button, if true, disables it
   */
  handleDisableButton = thisShelf => {
    const { shelf } = this.props
    return shelf === thisShelf.name
  }

  /**
   * Set the newShelf in the state, for loading property.
   * Call the method handleChangeShelf
   */
  handleChangeShelfButton = (event, book, newShelf) => {
    event.preventDefault()
    const { handleChangeShelf } = this.props

    this.setState({ newShelf })

    handleChangeShelf(book, newShelf)
  }

  render() {

    const { shelfs, book, loading } = this.props

    return (
      <Popup wide trigger={<Button primary icon='cog' />} on='click'>
        <Button.Group vertical labeled icon>
          {shelfs && shelfs.map(s => (
            <ButtonOption key={s.name}
              color={this.handleButtonColor(s)}
              disabled={this.handleDisableButton(s)}
              shelf={s}
              book={book}
              loading={loading && s.name === this.state.newShelf}
              handleChangeShelf={this.handleChangeShelfButton}
            />
          ))}
        </Button.Group>
      </Popup>
    )
  }
}

export default Options
