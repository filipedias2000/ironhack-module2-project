import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://openlibrary.org/api/books?bibkeys=:bookId&jscmd=data&format=json";

function ListPage() {
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
          <img src="${bookDetails.cover.large?}"></img>
          <h2>Title: {bookDetails.title}</h2>
          <h3>Number of Pages: {bookDetails.number_of_pages}</h3>
          <h3>Pubish date: {bookDetails.publish_date}</h3>
          <h3>Publisher: {bookDetails.publishers.map((publisher) => publisher).join()}</h3>
          
          <h3>Classification: {bookDetails.classifications.dewey_decimal_class}</h3>

          



          {/* Display other details as needed */}

        </div>
      )}
    </div>
  );
}

export default ListPage;
