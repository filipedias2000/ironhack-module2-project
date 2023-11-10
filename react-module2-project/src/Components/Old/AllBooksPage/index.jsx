import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const API_URL = "https://openlibrary.org/api/books?bibkeys=:bookId&jscmd=data&format=json";

function AllBooksPage() {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(API_URL.replace(":bookId", bookId))
      .then((response) => {
        const bookData = response.data;
        if (bookData && Object.keys(bookData).length > 0) {
          const bookList = Object.values(bookData).map(book => book);
          setBooks(bookList);
        }
      })
      .catch((error) => console.log(error));
  }, [bookId]);

  return (
    <div>
      <h1>All Books Page</h1>
      {books && books.map((book) => (
        <div key={`ISBN:${book.key}`}>
            
          <Link to={`/list/${book.key}`}>
            <img src={book.cover.large} height={100} alt="Book Cover" />
            <h3>{book.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBooksPage;
