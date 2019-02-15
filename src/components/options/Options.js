import React, { Component } from "react"
import { Popup, Button } from "semantic-ui-react"
import ButtonOption from './ButtonOption'
import * as BooksAPI from '../../api/BooksAPI'

class Options extends Component{

  handleButtonColor = thisShelf => {
    const { shelf } = this.props
    return shelf === thisShelf.name ? 'green' : 'grey'
  }

  handleDisableButton = thisShelf => {
    const { shelf } = this.props
    return shelf === thisShelf.name
  }

  handleChangeShelfButton = (book, newShelf) => {
    const { handleChangeShelf } = this.props
    handleChangeShelf(book, newShelf)
  }

  render() {

    const { shelfs, book } = this.props

    return (
      <Popup wide trigger={<Button primary icon='cog' />} on='click'>
        <Button.Group vertical labeled icon>
          {shelfs && shelfs.map(s => (
            <ButtonOption key={s.name}
              color={this.handleButtonColor(s)}
              disabled={this.handleDisableButton(s)}
              shelf={s}
              book={book}
              handleChangeShelf={this.handleChangeShelfButton}
            />
          ))}
        </Button.Group>
      </Popup>
    )
  }
}

export default Options
