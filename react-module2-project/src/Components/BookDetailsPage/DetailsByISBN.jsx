import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AddBook from "../AddBook"; 
 
const API_URL = "https://openlibrary.org/api/books?bibkeys=:bookId&jscmd=data&format=json";

function BookByISBN() {
  const { bookId } = useParams();
  const [bookDetailsISBN, setBookDetailsISBN] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_URL.replace(":bookId", bookId))
      .then((response) => {
        setBookDetailsISBN(response.data[bookId]);

      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        // Handle the error and  display an error message
      });
  }, []);

  const requestBody = bookDetailsISBN

  const handleAddBook = () => {
    // Implement the logic to add a book, for example, by making another API call
    axios.post(`https://openstories-29lc.onrender.com/FavouriteBooksList`,requestBody)
      .then((response) => {
        // Handle the response if needed
        console.log('Book added successfully:', response.data);
        navigate("/ViewList")
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div className="book-card">
       <h1 >Book Details </h1>
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

export default BookByISBN;


