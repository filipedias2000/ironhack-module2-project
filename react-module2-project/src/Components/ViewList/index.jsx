import React, { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_API_URL = "http://localhost:5174/";

function ViewList() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get(BACKEND_API_URL)
      .then(response => {
        // Update state with the data received from the API
        setApiData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data from API:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      <h1>Current List</h1>
      {apiData ? (
        // Display API data if available
      <h1>Title: {apiData.title}</h1>  
      
      ) : (
        // Display a loading message or other indicator while waiting for the API response
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default ViewList;
