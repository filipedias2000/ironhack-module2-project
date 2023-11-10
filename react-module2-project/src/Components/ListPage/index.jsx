import { useEffect, useState } from "react";
import axios from "axios";


const API_URL = "https://openlibrary.org";

function ListPage() {
    return(
        

<div>
            <h1>Search for a book</h1>
            {fetching && <p>Loading</p>}
            {!fetching && books.map((book)=> // DO NOT FORGET TO USE RETURN WHEN USING MAP
        {
            return(
            <div key={book.entries.type.key}>
            <p>Authors: {book.entries.authors.map((key)=> key)}</p>
            <p>ISBN: {book.isbn_13}</p> {/* Check the ISBN part later */}
            <p>Languages: {book.languages.key}</p> {/* Check for different languages later */}
            <img src={apartament.img}></img>
            <h3>{apartament.title}</h3>
            <p>Price: {apartament.pricePerDay}</p>
            </div>)
            })
        }
        </div>
    )

}

export default ListPage();