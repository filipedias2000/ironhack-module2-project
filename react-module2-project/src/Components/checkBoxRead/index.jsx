import axios from 'axios';
import React, { useState } from 'react';

const BACKEND_API_URL = `https://openstories-29lc.onrender.com/FavouriteBooksList`;

function Checkbox({ id }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    // You can customize the data you want to send to the backend
    const data = {
      checked: isChecked,
    };

    axios.post(`${BACKEND_API_URL}/${id}`, data)
      .then(response => {
        console.log('Checkbox state sent to the backend:', response.data);
      })
      .catch(error => {
        console.error('Error sending checkbox state to the backend:', error);
      });
  };

  return (
    <div>
      <button className="custom-label">
        <h4>Read</h4>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </button>
    </div>
  );
}

export default Checkbox;

