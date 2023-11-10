import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component or function
  };

  const handleSave = () => {
    // Use the 'searchTerm' variable wherever you need it.
    console.log('Saved search term:', searchTerm);
    // Perform other actions with the searchTerm variable as needed.
  };

  return (
    <div>
      <label htmlFor="searchInput">Search by ISBN:</label>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Type your search here"
      />
      <button onClick={handleSave}>
        <Link to={`/list/${searchTerm}`}>Submit</Link>
      </button>
    </div>
  );
}

export default SearchBar;









