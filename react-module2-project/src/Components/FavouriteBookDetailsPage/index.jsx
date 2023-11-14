import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BACKEND_API_URL = "http://localhost:5174/FavouriteBooksList/:id";

function FavouriteBookDetailsPage() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_API_URL.replace(":id", id))
      .then((response) => {
        setBookDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        // Handle the error and display an error message
      });
  }, [id]);

  return (
    <div>
      <div>
        {bookDetails && bookDetails.map((book) => (
          <div key={book.id}>
            {book.cover && book.cover.large && (
              <img src={book.cover.large} alt="" height={200} />
            )}
            <h2>Title: {book.title}</h2>
            <h3>Publish date: {book.publish_date}</h3>
            <h3>Number of Pages: {book.number_of_pages}</h3>
            <h3>Weight: {book.weight}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteBookDetailsPage;



