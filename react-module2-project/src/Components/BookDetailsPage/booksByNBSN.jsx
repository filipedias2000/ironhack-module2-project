
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL2 = "https://openlibrary.org/search.json?q=:bookIsbn";

function BookbyIsbn() {
  const { bookIsbn } = useParams();
  const [bookIsbnDetails, setBookIsbnDetails] = useState(null);

  useEffect(() => {
    axios.get(API_URL2.replace(":bookIsbn", bookIsbn)).then((response) => {
      setBookIsbnDetails(response.data[bookIsbn]);
    })
    .catch((error) => console.log(error));
  }, [bookIsbn]);

  return (
    <div>
       <h1>Book NBSN Page</h1>
      {bookIsbnDetails && (
        <div>
          <img src={bookDetails.cover.large} alt="" height={200} />
          <h2>Title: {bookIsbnDetails.title}</h2>
          

        </div>
      )}

    </div>
  );
}

export default BookbyIsbn;

