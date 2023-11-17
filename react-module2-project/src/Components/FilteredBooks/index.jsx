import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BACKEND_API_URL = "https://openstories-29lc.onrender.com/FavouriteBooksList";

function FilteredBooks({ searchTermName }) {
  const { id } = useParams();
  const [myBookDetails, setMyBookDetails] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]); // Declare filteredResult state

  useEffect(() => {
    // Fetch data using Axios
    axios.get(BACKEND_API_URL)
      .then(response => {
        setMyBookDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]); // Include id in the dependency array if id is used in the useEffect

  useEffect(() => {
    // Filter data when the search term changes
    const result = myBookDetails.filter(book =>
      book.title && book.title.includes(searchTermName)
    );
    setFilteredResult(result); // Update the filteredResult state
  }, [searchTermName, myBookDetails]); // Include searchTermName and myBookDetails in the dependency array

  return (
    <div>
      <h1>Results:</h1>

      <div className="book-card-container">
        {filteredResult.map((book) => (
          <div key={book.id} className="book-card">
            <Link to={`/list/personal/${book.id}`}>
              {book.bookDetailsISBN ? (
                <img src={book.bookDetailsISBN.cover.large} alt="" height={150} />
              ) : (
                <h1>No image</h1>
              )}
              <h2>Title: {book.bookDetailsISBN ? book.bookDetailsISBN.title : book.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilteredBooks;




