import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://openlibrary.org/api/books?bibkeys=:bookId&jscmd=data&format=json";

function BookDetailsPage() {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    axios.get(API_URL.replace(":bookId", bookId)).then((response) => {
      setBookDetails(response.data[bookId]);
    })
    .catch((error) => console.log(error));
  }, [bookId]);

  return (
    <div>
       <h1>Book Details Page</h1>
      {bookDetails && (
        <div>
          <img src={bookDetails.cover.large} alt="" height={200} />
          <h2>Title: {bookDetails.title}</h2>
          <h3>Number of Pages: {bookDetails.number_of_pages}</h3>
          <h3>Weight: {bookDetails.weight}</h3>
        </div>
      )}

    </div>
  );
}

export default BookDetailsPage;
