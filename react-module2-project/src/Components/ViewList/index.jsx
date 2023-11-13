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
      <h1>Data from Backend</h1>

      {apiData && (
        <ul>
       
        </ul>
      )}
    </div>
  );
}

export default ViewList;
