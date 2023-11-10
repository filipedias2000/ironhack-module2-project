import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        // Handle the error gracefully, e.g., display an error message
      });
  }, [bookId]);

  return (
    <div>
       <h1>Book Details Page</h1>
      {bookDetailsISBN && (
        <div>
          {bookDetailsISBN.cover && bookDetailsISBN.cover.large && (
            <img src={bookDetailsISBN.cover.large} alt="" height={200} />
          )}
          <h2>Title: {bookDetailsISBN.title}</h2>
          <h3>Number of Pages: {bookDetailsISBN.number_of_pages}</h3>
          <h3>Weight: {bookDetailsISBN.weight}</h3>
        </div>
      )}
    </div>
  );
}

export default BookByISBN;
