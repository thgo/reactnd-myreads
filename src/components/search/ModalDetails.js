import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react'
import BookDetails from '../book/BookDetails'

const ModalDetails = props => {

  return (
    <Modal trigger={<Button icon='eye' circular title='See more' />} closeIcon dimmer='blurring'>
      <Modal.Content scrolling>
        <BookDetails book={props.book} thumbnail={props.thumbnail} />
      </Modal.Content>
    </Modal>
  )

}

ModalDetails.defaultProps = {
  thumbnail: 'no-image.svg'
}

ModalDetails.propTypes = {
  book: PropTypes.object.isRequired,
}

export default ModalDetails
