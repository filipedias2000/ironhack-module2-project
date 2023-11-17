import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL2 = "https://openlibrary.org/search.json?q=:bookName";

function BookByName() {
  const { bookName } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    axios.get(API_URL2.replace(":bookName", bookName)).then((response) => {
      setBookDetails(response.data);
    })
    .catch((error) => console.log(error));
  }, [bookName]);

  return (
    <div>
      <h2>Search Results:</h2>
      
      {bookDetails && bookDetails.docs.length > 0 && (
        <div>

          <ul className="book-list">
       {bookDetails.docs.map((book, index) => (
       <li  key={index}>
           <Link to={`/list/${book.isbn && book.isbn[0]}`}>
           Title: {book.title}, ISBN: {book.isbn && book.isbn[0]}
           {book.cover && (
          <img src= {book.cover.large} alt={`img`} />
        )}
      </Link>
    </li>
  ))}
</ul>

        </div>
      )}
    </div>
  );
}

export default BookByName;


