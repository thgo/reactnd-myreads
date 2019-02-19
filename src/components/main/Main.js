import React from 'react'
import Shelf from '../shelf/Shelf';

const Main = props => {

  const { shelfs, loading, handleChangeShelf } = props

  return (
    <div>
      { shelfs && shelfs.map(shelf => (
          <Shelf
            key={shelf.id}
            color={shelf.color}
            books={props[shelf.name]}
            title={shelf.title}
            shelfs={shelfs}
            loading={loading}
            handleChangeShelf={handleChangeShelf} />
        ))
      }
    </div>
  )
}

export default Main
