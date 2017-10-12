import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'

class Library extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    };


    render(){

        const { books, changeShelf } = this.props;

        return(
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Shelf title='Currently Reading'
                                   books={books.filter((book) => book.shelf === 'currentlyReading')}
                                   changeShelf={ changeShelf }

                            />
                            <Shelf title='Want to Read'
                                   books={books.filter((book) => book.shelf === 'wantToRead')}
                                   changeShelf={ changeShelf }

                            />
                            <Shelf title='Read'
                                   books={books.filter((book) => book.shelf === 'read')}
                                   changeShelf={ changeShelf }

                            />
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
                )}
            </div>
        )}
}

export default Library;
