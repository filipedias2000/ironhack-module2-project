import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FavouriteBookDetailsPage() {
  const { id } = useParams();
  const [myBookDetails, setMyBookDetails] = useState([]);

  const BACKEND_API_URL = `https://openstories-29lc.onrender.com/FavouriteBooksList/${id}`;

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
    <div className="main-div">
      <div>
        {myBookDetails && (
          <div>
            <div className="img-container">
              {myBookDetails.cover && myBookDetails.cover.large ? (
                <img src={myBookDetails.cover.large} alt="" />
              ) : (
                <h2>No Image</h2>
              )}
            </div>
    
            <div className="body-container">
              <h2>Title: {myBookDetails.title}</h2>

              <h2>
                Author(s): {myBookDetails.authors && myBookDetails.authors.length > 0 ? (
                  myBookDetails.authors.map((author, index) => (
                    <span key={index}>{author.name}</span>
                  ))
                ) : (
                  "Not available"
                )}
              </h2>
              <h2>
                Number of Pages: 
                {myBookDetails.number_of_pages && myBookDetails.number_of_pages.length > 0 ? (myBookDetails.number_of_pages
                ) : (
                    "Not available"
                    )}
             </h2>


             <h2>
  Publish date:{" "}
  {myBookDetails.publish_date ? (
    myBookDetails.publish_date
  ) : (
    "Not available"
  )}
</h2>

              <h2>Description :</h2><p><h5> {myBookDetails.description}</h5></p> 
            </div>
  
            <div className="ebook-container">
              <h4> E-book: {myBookDetails.ebooks ? (
                  myBookDetails.ebooks.map((ebook, index) => (
                    <a key={index} href={ebook.preview_url}>
                      {ebook.preview_url}
                    </a>
                  ))
                ) : (
                  "Not available"
                )}
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  
  
}

export default FavouriteBookDetailsPage;



