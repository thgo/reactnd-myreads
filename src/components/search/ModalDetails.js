import React from 'react'
import { Modal, Button } from 'semantic-ui-react';
import BookDetails from '../book/BookDetails';

const ModalDetails = props => {

  return (
    <Modal trigger={<Button icon='eye' title='See more' />} closeIcon dimmer='blurring'>
      <Modal.Content scrolling>
        <BookDetails book={props.book} thumbnail={props.thumbnail} />
      </Modal.Content>
    </Modal>
  )

}

export default ModalDetails
