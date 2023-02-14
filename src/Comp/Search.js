import React from 'react';
import Book from './Book';
import { Link } from "react-router-dom";

const Search = ({ showSearchPage, setShowSearchpage, searchQuery, setSearchQuery, searchBooks, setBooks, setSearchBooks }) => {

    
    return (
        <div>
            <div className="search-books-bar">
                <Link to="/" className="close-search" onClick={() => setShowSearchpage(!showSearchPage) && setSearchBooks([])}> Close </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBooks.map(b => (
                        <li key={b.id}>
                            <Book book={b} setBooks={setBooks} />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )



}
export default Search;