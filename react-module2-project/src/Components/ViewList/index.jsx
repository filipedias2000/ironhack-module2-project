import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddBookForm from "../AddBook";
import { Link } from "react-router-dom";


const BACKEND_API_URL = "http://localhost:5174/FavouriteBooksList";

function MyList() {
  const { id } = useParams();
  const [MybookDetails, setMyBookDetails] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_API_URL)
      .then((response) => {
        // Check if the array is not empty before accessing its first element
        if (response.data && response.data.length > 0) {
          // Access the title property from the first item in the array
          setMyBookDetails(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        // Handle the error and display an error message
      });
  }, [id]);


  

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
        {MybookDetails.map((book) => (
          <div key={book.id} className="book-card">{/* /* ou id?*/ }
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

export default MyList;
