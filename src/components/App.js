import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import '../css/Style.css'
import Library from './Library'
import Search from './Search'
import {Route} from 'react-router-dom'


class BooksApp extends React.Component {

    state = {
        books: []
    };

	changeShelf = (book, shelf) => {
		if (book.shelf !== shelf) {
			BooksAPI.update(book, shelf).then(() => {
				book.shelf = shelf
				this.setState(state => ({
					books: state.books.filter(b => b.id !== book.id).concat([ book ])
				}))
			})
		}
	};

    componentDidMount() {
        this.getBooks()
    }

    getBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    render() {


        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Library
                        books={this.state.books}
                        changeShelf={this.changeShelf}

                    />

                )}/>
                <Route path='/search' render={({history}) => (
                    <Search
	                    books={this.state.books}
                        changeShelf={this.changeShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp