import { RECEIVE_BOOKS, CHANGE_BOOK_SHELF } from '../actions'

const initial_state = {}

export default function books (state = initial_state, action) {
  switch (action.type) {

    case RECEIVE_BOOKS :
      return action.books

    case CHANGE_BOOK_SHELF :
      return state.map(book => {
        if (book.id === action.book.id) {
          return {
            ...book,
            shelf: action.newShelf
          }
        }
        return book
      })
    default :
      return state
  }
}
