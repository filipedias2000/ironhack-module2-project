import React, { useState } from 'react';
import SearchBar from '../SearchBy_ISBN';
import SearchByNameBar from '../SearchByNameBar';

function Homepage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Implement search logic here, and update the searchResults state accordingly
    // For simplicity, just logging the search term for now
    console.log('Searching for:', searchTerm);
  };

  const [searchResultsName, setSearchResultsName] = useState([]);

  const handleSearchName = (searchTermName) => {
    // Implement search logic here, and update the searchResultsName state accordingly
    // For simplicity, just logging the search term for now
    console.log('Searching for:', searchTermName);
  };

  return (
    <div>
      <h1>Search Example</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Render search results or other components here */}
      <SearchByNameBar onSearch={handleSearchName} />
    </div>
  );
}

export default Homepage;
