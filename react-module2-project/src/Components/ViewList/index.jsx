import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import BookByName from "../BookDetailsPage/DetailsByName";

const BACKEND_API_URL = "http://localhost:5174/";

function ViewList() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get(BACKEND_API_URL)
      .then(response => {
        // Update state with the data received from the API
        setApiData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data from API:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      <h1>Data from Backend</h1>
      <p>{apiData.bookDetailsISBN.title}</p>
      <p></p>

      {apiData && (
        <ul>
       
        </ul>
      )}
    </div>
  );
}

/* export default ViewList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 import AddBook from "../AddBook"; 
 
const API_URL = "https://openlibrary.org/api/books?bibkeys=:bookId&jscmd=data&format=json";

function BookByISBN() {
  const { bookId } = useParams();
  const [bookDetailsISBN, setBookDetailsISBN] = useState(null);

  useEffect(() => {
    axios.get(API_URL.replace(":bookId", bookId))
      .then((response) => {
        setBookDetailsISBN(response.data[bookId]);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        // Handle the error and  display an error message
      });
  }, [bookId]);

  let myId =4545123

  const requestBody = {bookDetailsISBN, myId}

  const handleAddBook = () => {
    // Implement the logic to add a book, for example, by making another API call
    axios.post(`http://localhost:5174/FavouriteBooksList`,requestBody)
      .then((response) => {
        // Handle the response if needed
        console.log('Book added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
       <h1>Book Details Page</h1>
      {bookDetailsISBN && (
        <div key={bookDetailsISBN.bookId}>
          {bookDetailsISBN.cover && bookDetailsISBN.cover.large && (
            <img src={bookDetailsISBN.cover.large} alt="" height={200} />
          )}
          <h2>Title: {bookDetailsISBN.title}</h2>
          <h3>Publish date: {bookDetailsISBN.publish_date}</h3>
          <h3>Number of Pages: {bookDetailsISBN.number_of_pages}</h3>
          <h3>Weight: {bookDetailsISBN.weight}</h3>
        </div>
      )}

      <button onClick={handleAddBook}>Add Book</button>

      </div>
  );
}

export default BookByISBN; */

