import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book';

const BookList = (props) => {
    const { books, changeShelf } = props;
    return (
        <ol className="books-grid">
            { books.map( book =>
                <li key={book.id}>
                    <Book book={book}
                          changeShelf={ changeShelf }
                    />
                </li>
            ) }
        </ol>
    )
}


export default BookList;
