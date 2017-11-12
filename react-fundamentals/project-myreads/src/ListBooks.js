import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render () {
    const { handleUpdate, books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={books.filter(book => book.shelf === 'currentlyReading')}
              handleUpdate={handleUpdate}
            />
            <Bookshelf
              title="Want to Read"
              books={books.filter(book => book.shelf === 'wantToRead')}
              handleUpdate={handleUpdate} />
            <Bookshelf
              title="Read"
              books={books.filter(book => book.shelf === 'read')}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
