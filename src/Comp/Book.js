import React from 'react';
import * as BooksAPI from "../BooksAPI"; 


//This method handles the book shelf changing 
const Book = ({ book, setBooks }) => {
    const ChangeShelf = e => {
        BooksAPI.update(book, e.target.value).then(response =>
            BooksAPI.getAll().then(updatedBooks => {
                setBooks(updatedBooks);
            })
        );
    };


    return(
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                           book.imageLinks && `url(${book.imageLinks.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={e => ChangeShelf(e)} defaultValue={book.shelf}>
                        <option value="none" disabled>
                            Move to...
                        </option>
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

    )


}

export default Book;
