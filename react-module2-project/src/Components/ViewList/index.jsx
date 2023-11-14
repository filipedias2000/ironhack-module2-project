import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddBook from "../AddBook";
import DeleteBook from "../DeleteBook";

const BACKEND_API_URL = "http://localhost:5174/FavouriteBooksList";

function ViewList() {
  const { id } = useParams();
  const [myBookDetails, setMyBookDetails] = useState([]);

  useEffect(() => {
    axios
      .get(BACKEND_API_URL)
      .then((response) => {
        // Check if the array is not empty before accessing its first element

        // Access the title property from the first item in the array
        setMyBookDetails(response.data);
        /*           console.log(response.data) */
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        // Handle the error and display an error message
      });
  }, [id]);

  function deleteBook(bookId) {
    axios.delete(`${BACKEND_API_URL}/${bookId}`).then(() => {
      console.log("Book deleted!");
      axios.get(BACKEND_API_URL).then((response) => {
        setMyBookDetails(response.data);
      });
    });
  }

  return (
    <div>
      <div className="">
        <h1>My Favourite books</h1>
        <button>Delete book</button>
        <button>Search on My Favourites</button>
        <Link to="/AddBookManually">
          <button>Add Manually</button>
        </Link>
      </div>

      <div className="book-card-container">
        {myBookDetails.map((book) => {
          if (book.bookDetailsISBN) {
            return (
              <div key={book.id} className="book-card">
                {/* /* ou id?*/}

                {book.bookDetailsISBN.cover ? (
                  <img
                    src={book.bookDetailsISBN.cover.large}
                    alt=""
                    height={200}
                  />
                ) : (
                  <h1>No image</h1>
                )}
                <Link to={`/list/${book.bookDetailsISBN.identifiers.isbn_13}`}>
                  <h2>Title: {book.bookDetailsISBN.title}</h2>
                </Link>
                <button onClick={() => deleteBook(book.id)}>Delete Book</button>
                {/*             <h3>Publish date: {book.publish_date}</h3>
            <h3>Number of Pages: {book.number_of_pages}</h3>
            <h3>Weight: {book.weight}</h3> */}
              </div>
            );
          } else {
            return (
              <div key={book.id} className="book-card">
                {/* /* ou id?*/}

                {book.cover ? (
                  <img src={book.cover} alt="" height={200} />
                ) : (
                  <h1>No image</h1>
                )}
                <Link to={`/list/personal/${book.id}`}>
                  <h2>Title: {book.title}</h2>
                </Link>
                <button onClick={() => deleteBook(book.id)}>Delete Book</button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ViewList;
