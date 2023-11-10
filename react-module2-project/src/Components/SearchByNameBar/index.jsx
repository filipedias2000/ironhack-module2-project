import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchByNameBar({ onSearch }) {
  const [searchTermName, setSearchTermName] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTermName(value);
    onSearch(value); // Pass the search term to the parent component or function
  };

  const handleSaveName = () => {
    // Use the 'searchTermName' variable wherever you need it.
    console.log('Saved search term:', searchTermName);
    // Perform other actions with the searchTermName variable as needed.
  };

  return (
    <div>
      <label htmlFor="searchInput">Search by Name:</label>
      <input
        type="text"
        id="searchInput"
        value={searchTermName}
        onChange={handleSearch}
        placeholder="Type your search here"
      />
      <button onClick={handleSaveName}>
        <Link to={`/listName/${searchTermName}`}>Submit</Link>
      </button>
    </div>
  );
}

export default SearchByNameBar;
