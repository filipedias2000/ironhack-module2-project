import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FavouriteBookDetailsPage() {
  const { id } = useParams();
  const [myBookDetails, setMyBookDetails] = useState([]);

  const BACKEND_API_URL = `http://localhost:5174/FavouriteBooksList/${id}`;

  useEffect(() => {
    axios.get(BACKEND_API_URL)
      .then((response) => {
        setMyBookDetails(response.data); // Assuming you want details from the first book
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        // Handle the error and display an error message
      });
  }, []);
/* 
  const deleteBook = (bookId) => {
    // Implement your deleteBook logic here
    console.log(`Delete book with ID: ${bookId}`);
  }; */

  return (
    <div>
      <div>
          {/* <div key={myBookDetails.id}> */}
{/*           {myBookDetails.bookDetailsISBN.cover ? (
                  <img
                    src={book.bookDetailsISBN.cover.large}
                    alt=""
                    height={200}
                  />
                ) : (
                  <h1>No image</h1>
                )} */}
            {myBookDetails && (
                <div>
                {myBookDetails.cover && myBookDetails.cover.large ? (<img src={myBookDetails.cover.large} alt="" />
                ) : (
                <h2>No Image</h2> )}
                <h2>Title: {myBookDetails.title}</h2>
                <h2>Number of Pages: {myBookDetails.number_of_pages}</h2>

                <h2>Description: {myBookDetails.description}</h2>
                <h2> E-book: {myBookDetails.ebooks ? (
                  myBookDetails.ebooks.map((ebook, index) => (
                 <a key={index} href={ebook.preview_url}>{ebook.preview_url}</a>
                  ))
                  ) : (
                 "Not available"
                  )}
                 </h2>
                
                                
  {/*               <button onClick={() => deleteBook(myBookDetails.id)}>Delete Book</button> */}
              
          
              </div>
            )}
            
        
      </div>
    </div>
  );
}

export default FavouriteBookDetailsPage;



