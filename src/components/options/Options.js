import React, { Component } from "react"
import { Popup, Button } from "semantic-ui-react"
import ButtonOption from './ButtonOption'

class Options extends Component{

  state = {
    newShelf: ''
  }

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
