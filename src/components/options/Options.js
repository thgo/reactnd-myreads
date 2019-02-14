import React, { Component } from "react"
import { Popup, Button } from "semantic-ui-react"
import ButtonOption from './ButtonOption'

class Options extends Component{

  handleButtonColor = thisShelf => {
    const { shelf } = this.props
    return shelf === thisShelf.name ? 'green' : 'grey'
  }

  handleDisableButton = thisShelf => {
    const { shelf } = this.props
    return shelf === thisShelf.name
  }

  render() {
    return (
      <Popup wide trigger={<Button primary icon='cog' />} on='click'>
        <Button.Group vertical labeled icon>
          {this.props.shelfs && this.props.shelfs.map(s => (
            <ButtonOption key={s.id}
              color={this.handleButtonColor(s)}
              disabled={this.handleDisableButton(s)}
              content={s.title}
            />
          ))}
        </Button.Group>
      </Popup>
    )
  }
}

export default Options
