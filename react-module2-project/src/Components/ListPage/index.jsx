import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://openlibrary.org/api/books?bibkeys=:bookId&jscmd=data&format=json";

function List() {
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
      {bookDetails && (
        <div>
          <h2>Title: {bookDetails.title}</h2>
        </div>
      )}

    </div>
  );
}

export default List;
