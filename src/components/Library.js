import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Shelf from './Shelf'


const Library = (props) => {

	const {books, changeShelf} = props;

	return (
		<div className="app">
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf
							title='Currently Reading'
							books={books.filter((book) => book.shelf === "currentlyReading")}
							changeShelf={changeShelf}

						/>
						<Shelf
							title='Want to Read'
							books={books.filter((book) => book.shelf === "wantToRead")}
							changeShelf={changeShelf}

						/>
						<Shelf
							title='Read'
							books={books.filter((book) => book.shelf === "read")}
							changeShelf={changeShelf}

						/>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
			)}
		</div>
	)
};

Library.propTypes = {
	books: PropTypes.array.isRequired,
	changeShelf: PropTypes.func.isRequired
};


export default Library;
