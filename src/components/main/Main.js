import React from 'react'
import PropTypes from 'prop-types'
import Shelf from '../shelf/Shelf'

const Main = props => {

  const { shelfs, loading, handleChangeShelf } = props

  const getShelfsToShow = () => {
    return shelfs.filter(s => s.show)
  }

  return (
    <div>
      { shelfs && getShelfsToShow().map(shelf => (
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

Main.defaultProps = {
  loading: false
}

Main.propTypes = {
  shelfs: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
}

export default Main
