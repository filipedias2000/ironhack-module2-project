import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_API_URL = "https://openstories-29lc.onrender.com/FavouriteBooksList";

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publish_date, setPublish_date] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onSubmit function passed from the parent component
    const requestBody = {
        title,
        author,
        description,
        publish_date,
        cover: {
          large:"https://thumbs.dreamstime.com/z/old-aged-grungy-book-paper-sheet-page-vignette-isolated-frame-background-copy-space-vintage-black-vertical-framed-grunge-87603655.jpg?w=576",
        }
      };
      
    axios.post(`${BACKEND_API_URL}`, requestBody).then(() => {
        navigate("/ViewList");
      })
  };

  return (
    <form onSubmit={handleSubmit} className="custom-form">
      <label> Title:<input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/></label>
      
      <label> Author:<input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>

      <label> Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <label> Publish Date: <input type="text" value={publish_date} onChange={(e) => setPublish_date(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBook;


