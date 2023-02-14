import React from 'react';
import Shelf from './Shelf';


const Shelves = ({ books, setBooks }) => {

    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");



  
    
    return(
        <div>
            <Shelf title="Currently Reading" books={currentlyReading} setBooks={setBooks} ></Shelf>
            <Shelf title="Want To Read" books={wantToRead} setBooks={setBooks} ></Shelf>
            <Shelf title="Read" books={read} setBooks={setBooks} ></Shelf>
            
        </div>
         
    )



}
export default Shelves;