import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_API_URL = "http://localhost:5174/FavouriteBooksList";

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onSubmit function passed from the parent component
    const requestBody = {title, author, description, year, cover: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"}

    axios.post(`${BACKEND_API_URL}`, requestBody).then(() => {
        navigate("/ViewList");
      })
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Title:<input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/></label>
      
      <label> Author:<input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>

      <label> Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <label> Publish Date: <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBook;


/* 

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"



fsss

const handleSubmit = (e) =>{
    //when submited, the default action of the form is to refresh the webpage and we dont want that
    e.preventDefault()

//this creates a box to be delivered to the API ate the moment the post request is done

    const requestBody = {title, description}

    axios.post(`${API_URL}/projects`,requestBody).then(()=>{
        navigate("/projects")

    })
}


return(
    <div>
        <form onSubmit={handleSubmit}>
            <label> Title:<input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/></label>
            <label> Description: <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/></label>
            <button type="submit"> Submit </button>
        </form>
    </div>
  )

}

export default AddProjectPage */