import React from 'react';
import Book from './Book';


//الكتاب- عنوان الرف اللي بيكون فيه - الرف الجديد اذا في
const Shelf = ({ books, title, setBooks }) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(b => (
                        <li key={b.id}>
                            <Book book={b} setBooks={setBooks} />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}
export default Shelf;

