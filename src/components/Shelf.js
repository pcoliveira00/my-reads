import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = (props) => {

	const {title, books, changeShelf} = props;

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map(book =>
						<li key={book.id}>
							<Book
								book={book}
								changeShelf={changeShelf}
							/>
						</li>
					)}
				</ol>
			</div>
		</div>
	);
};

Shelf.propTypes = {
	title: PropTypes.string,
	books: PropTypes.array.isRequired,
	changeShelf: PropTypes.func.isRequired
};

export default Shelf;