import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_API_URL = "http://localhost:5174";

function AddBook(props) {
  const [newBook, setNewBook] = useState({
    title: props.title || ''
  });


  const [bookList, setBookList] = useState([]);



  const handleAddBook = () => {
    // Add the new book to the bookList array
    setNewBook([...bookList, newBook]);

    // Optional: You can also send this data to the backend API here if needed
    axios.post(`${BACKEND_API_URL}/BooksList`, newBook)
      .then((response) => {
        // Handle the response if needed
        console.log('Book added successfully:', response.data);
      })

      .catch((error) => {
        // Handle errors
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
      <button onClick={handleAddBook}>Add book</button>   
    </div>
  );
}

export default AddBook;
