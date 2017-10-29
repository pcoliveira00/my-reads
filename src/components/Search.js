import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../api/BooksAPI'
import BookList from './BookList'
import _ from 'lodash';

class Search extends Component {

    state = {
        query: '',
        results: []
    };

    updateQuery = (query) => {
        query = query.trim();

        if (query.length > 0) {
            BooksAPI.search(query).then(response => {
                if (response.length > 0) {
	                const {books} = this.props;
	                books.forEach((book) => {
			                response.forEach((resp, index, arr) => {
			                if (resp.id === book.id) {
				                arr[index].shelf = book.shelf;
			                }
		                })
	                });
	                this.setState({
		                results: response,
		                query
	                })
                }
            })
        }
    };

	componentWillUnmount() {
		this.setState({ query: '', results: [] })
	}

    render() {

        const {books, changeShelf} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookList
                            books={this.state.results}
                            changeShelf={changeShelf}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    changeShelf: PropTypes.func.isRequired
};


export default Search;
