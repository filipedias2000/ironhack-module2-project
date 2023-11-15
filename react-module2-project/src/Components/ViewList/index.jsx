import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddBook from "../AddBook";


const BACKEND_API_URL = "https://openstories-29lc.onrender.com/FavouriteBooksList";

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
      
        <Link to="/AddBookManually">
          <button>Add Manually</button>
        </Link>
      </div>

      <div className="book-card-container">
        {myBookDetails.map((book) => {
          if (book.bookDetailsISBN) {
            return (
              <div key={book.id} className="book-card">
              <Link to={`/list/personal/${book.id}`}>
                {book.bookDetailsISBN.cover ? (
                  <img
                    src={book.bookDetailsISBN.cover.large}
                    alt=""
                    height={150}
                  />
                ) : (
                  <h1>No image</h1>
                )}
                {/* <Link to={`/list/${book.bookDetailsISBN.identifiers.isbn_13}`}> */}
                
                  <h2>Title: {book.bookDetailsISBN.title}</h2>
                    </Link>
             {/*    </Link> */}
                <button onClick={() => deleteBook(book.id)}>Delete Book</button>
              
              </div>
            );
          } else {
            return (
              <div key={book.id} className="book-card">
                <Link to={`/list/personal/${book.id}`}>

                {book.cover ? (
                    
                  <img src={book.cover.large} alt="" height={150} />
                ) : (
                  <img src="https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg" alt="" height={200} />  )}
                
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
