import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchOnFav({ onSearch }) {
  const [searchTermName, setSearchTermName2] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTermName2(value);
    onSearch(value);
  };

  const handleSaveFilter = () => {
    console.log('Saved search term:', searchTermName);
    // Perform other actions with the searchTermName variable as needed.
    // Note: If you want to navigate, use the history object or a state management solution.
  };

  return (
    <div>
      <label htmlFor="searchInput">Search on your list!</label>
      <input
        type="text"
        id="searchInput"
        value={searchTermName}
        onChange={handleSearch}
        placeholder="Type your search here"
      />
      
        <button onClick={handleSaveFilter} className="AddButton">
        <Link to={`/ViewList/filter/`}>
          Submit
      
      </Link>
      </button>
    </div>
  );
}

export default SearchOnFav;
