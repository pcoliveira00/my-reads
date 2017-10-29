/* eslint-disable semi */
import React from 'react'
import PropTypes from 'prop-types'

const Book = (props) => {

	const {book, changeShelf} = props;

	const thumbnail = book.imageLinks ?
		book.imageLinks.thumbnail.replace("http://", "https://") :
		'https://books.google.com/googlebooks/images/no_cover_thumb.gif';


	return	<div className="book">
		<div className="book-top">
			<div
				className="book-cover"
				style={{width: 128, height: 193, backgroundImage: `url(${thumbnail})`}}/>
			<div className="book-shelf-changer">
				<select
					value={book.shelf}
					onChange={event => changeShelf(book, event.target.value)}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		</div>

		<div className="book-title">{book.title}</div>
		<div className="book-authors">{book.authors}</div>
	</div>
};

Book.propTypes = {
	changeShelf: PropTypes.func.isRequired
};

export default Book;
