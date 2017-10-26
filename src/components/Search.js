import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import BookList from './BookList'

class Search extends Component {

    state = {
        query: '',
        results: []
    }

    updateQuery = (query) => {
        query = query.trim()

        if(query.length > 0){
            BooksAPI.search(query).then( response => {
                if(response.length > 0){
                    this.setState({ query: query, results: response })
                }
            })
        }
    }

    clearQuery = () => {
        this.setState({ query: '', results: [] })
    }


    render(){

        const { changeShelf } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" onClick={() => this.clearQuery()}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e)=> this.updateQuery(e.target.value)}/>
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

export default Search;
