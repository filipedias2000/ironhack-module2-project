import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FavouriteBookDetailsPage() {
  const { id } = useParams();
  const [myBookDetails, setMyBookDetails] = useState([]);
  const navigate = useNavigate();

  const BACKEND_API_URL = `https://openstories-29lc.onrender.com/FavouriteBooksList/${id}`;

  useEffect(() => {
    axios.get(BACKEND_API_URL)
      .then((response) => {
        setMyBookDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, []);

  function deleteBook(id) {
    axios.delete(`${BACKEND_API_URL}/${id}`).then(() => {
      console.log("Book deleted!");
      axios.get(BACKEND_API_URL).then((response) => {
        setMyBookDetails(response.data);
        then(() => {
            navigate("/ViewList");
          })
       
      });
    });
  }

  return (
    <div>
      <div>
        {myBookDetails && (
          <div className="main-div">
            <div className="img-container">
              {myBookDetails.cover && myBookDetails.cover.large ? (
                <img src={myBookDetails.cover.large} alt="" height={450} />
              ) : (
                <img src="https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg" alt="" height={350} />
              )}
            </div>

            <div className="body-container">
              <h2>Title: {myBookDetails.title}</h2>

              <h3>
                Author(s):{" "}
                {myBookDetails.authors && myBookDetails.authors.length > 0 ? (
                  myBookDetails.authors.map((author, index) => (
                    <span key={index}>{author.name}</span>
                  ))
                ) : (
                  "Not available"
                )}
              </h3>
              <h3>
                Number of Pages:{" "}
                {myBookDetails.number_of_pages &&
                myBookDetails.number_of_pages.length > 0 ? (
                  myBookDetails.number_of_pages
                ) : (
                  "Not available"
                )}
              </h3>

              <h3>
                Publish date:{" "}
                {myBookDetails.publish_date ? (
                  myBookDetails.publish_date
                ) : (
                  "Not available"
                )}
              </h3>

              <h3>Description :</h3>
              <h5>{myBookDetails.description}</h5>
            </div>
          </div>
        )}

         <div classeName = "Bottom-container">

        <div className="ebook-container">
          <h4>
            e-book:{" "}
            {myBookDetails.ebooks ? (
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

        <div className="button-container">

          <Link to="/ViewList">
            <button>Back to myList</button>
          </Link>

          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={() => deleteBook(id)}>Delete Book</button>

          <Link to="">
            <button>Mark as Read</button>
          </Link>

        </div>
        </div>


      </div>
    </div>
  );
}

export default FavouriteBookDetailsPage;



