import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import '../css/Style.css'
import Library from './Library'
import Search from './Search'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount(){
    this.getBooks()
    }


    getBooks(){
        BooksAPI.getAll().then((books)   => {
            this.setState({ books })
        })
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(this.getBooks())
    }

    render() {


        return (
            <div className="app">
              <Route exact path='/' render={() => (
                  <Library
                      books={this.state.books}
                      changeShelf={ this.changeShelf }

                  />

              )}/>
              <Route path='/search' render={({ history }) => (
                  <Search
                      changeShelf={ this.changeShelf }
                  />
              )}/>
            </div>
        )
    }
}

export default BooksApp