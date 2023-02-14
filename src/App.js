//************************************* Libraries ************************************
import "./App.css";
import { useState, useEffect } from "react";
import Search from "./Comp/Search";
import Shelves from "./Comp/Shelves";
import * as BooksAPI from "./BooksAPI";
import { Link, Routes, Route } from "react-router-dom";


function App() {

//************************************* Variables ************************************

  //For showing the search page
  const [showSearchPage, setShowSearchpage] = useState(false);

  //For the search query
  const [searchQuery, setSearchQuery] = useState("");

  //For the search result books 
  const [searchBooks, setSearchBooks] = useState([]);
  
  //For the books that coming from the API 
  const [books, setBooks] = useState([]); 

 


//************************************* Functions ************************************

  // Retrieve books from the API
  useEffect(() => {
    BooksAPI.getAll().then(retrievedBooks => {
      setBooks(retrievedBooks);
    });
  });

  // This method sets the shelves of the new book that been searched for
  const setDefaultShelves = (searchedBooksLocal, newBooks) => {
    return searchedBooksLocal.map(book => {
      for (let i = 0; i < newBooks.length; i++) {
        if (newBooks[i].id === book.id) {
          return { ...book, shelf: newBooks[i].shelf };
        }
      }
      return { ...book, shelf: "none" };
    });
  };

  // This method checks if something is written on the search bar and search for 
  // whatever was written on the API then returns the results
  useEffect(() => {
    const SearchChecker = event => {
      if (searchQuery.length !== 0) {
        BooksAPI.search(searchQuery).then(searchedBooks => {
          if (!searchedBooks.error) {
            BooksAPI.getAll().then(newBooks => {
              setSearchBooks(setDefaultShelves(searchedBooks, newBooks));
            });
          } else {
            setSearchBooks([]);
          }
        });
      } else if (searchQuery.length === 0) {
        setSearchBooks([]);
      }
    }
    SearchChecker()
  }, [searchQuery]);



//************************************* Main ************************************

  return (
    <div className="app"> 

        <Routes>
        <Route exact path="/"/>
        <Route exact path="/Search" />
        </Routes>
      
      <div>
        {showSearchPage ? ( 
          
            <Search
              showSearchPage={showSearchPage}
              setShowSearchpage={setShowSearchpage}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setBooks={setBooks}
              searchBooks={searchBooks}
              setSearchBooks={setSearchBooks}
            />

        ) : (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelves books={books} setBooks={setBooks} />
            </div>
            <div className="open-search">
              <Link to="/Search" onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</Link>
            </div>
          </div> )
        }

      </div>
    </div>
      
  );
} 




export default App;
