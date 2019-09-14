import * as BooksAPI from '../../api/BooksAPI'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const CHANGE_BOOK_SHELF = 'CHANGE_BOOK_SHELF'

function receiveBooks (books) {
  return {
    type: RECEIVE_BOOKS,
    books
  }
}

export function handleReceiveBooks () {
  return dispatch => {
    return BooksAPI.getAll()
      .then(books => dispatch(receiveBooks(books)))
  }
}

function changeBookShelf (book, newShelf) {
  return {
    type: CHANGE_BOOK_SHELF,
    book,
    newShelf
  }
}

export function handleChangeBookShelf (book, newShelf) {
  return dispatch => {
    return BooksAPI.update(book, newShelf)
      .then(dispatch(changeBookShelf(book, newShelf)))
  }
}
