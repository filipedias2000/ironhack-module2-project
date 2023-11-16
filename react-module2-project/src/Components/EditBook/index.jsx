import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BACKEND_API_URL = "https://openstories-29lc.onrender.com/FavouriteBooksList";

const EditBookDetails = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [number_of_pages, setNumber_of_pages] = useState('');
  const [publish_date, setPublish_date] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState('');
  const [ebooks, setEbooks] = useState('');




  const navigate = useNavigate();

  useEffect(() => {
    // Fetch book details based on the ID and populate the state
    axios.get(`${BACKEND_API_URL}/${id}`)
      .then((response) => {
        const bookDetails = response.data;
        setTitle(bookDetails.title);
        setAuthors(bookDetails.authors && bookDetails.authors.url);
        setNumber_of_pages(bookDetails.number_of_pages);
        setPublish_date(bookDetails.publish_date);
        setDescription(bookDetails.description);
        setCover(bookDetails.cover && bookDetails.cover.large);
        setEbooks(bookDetails.ebooks && bookDetails.ebooks.preview_url&& bookDetails.ebooks.preview_url);

      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
        title,
        authors:[
            {
                name: authors,
            },
        ],
        number_of_pages,
        publish_date,
        description,
        cover: {
          large: cover,
        },
        ebooks: [
          {
            preview_url: ebooks,
          },
        ],
      };

    axios.put(`${BACKEND_API_URL}/${id}`, requestBody)
      .then(() => {
        navigate(`/list/personal/${id}`);
      })
      .catch((error) => {
        console.error("Error updating book details:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className ="custom-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            readOnly
          />
        </label>

        <label>
          Author(s):
          <input
            type="text"
            name="author"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
          />
        </label>

        <label>
          Number of Pages:
          <input
            type="text"
            name="numberOfPages"
            value={number_of_pages}
            onChange={(e) => setNumber_of_pages(e.target.value)}
          />
        </label>

        <label>
          Publish Date:
          <input
            type="text"
            name="publish_date"
            value={publish_date}
            onChange={(e) => setPublish_date(e.target.value)}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Cover:
          <input
            type="text"
            name="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </label>

        <label>
          e-book:
          <input
            type="text"
            name="e-book"
            value={ebooks}
            onChange={(e) => setEbooks(e.target.value)}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditBookDetails;
