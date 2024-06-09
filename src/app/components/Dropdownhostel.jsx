// components/DropdownForm.js
'use client'
import { useState } from 'react';

const Dropdownhostel = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

   return (
    <form>      
      <select id="options" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Select an option
        </option>
        <option value="VIP hostel">VIP hostel</option>
        <option value="New Two Storied Building">New Two Storied Building</option>
        <option value="Old Two storied Building">Old Two storied Building</option>
        <option value="Tin Shed Building">Tin Shed Building</option>
      </select>
      
    </form>
  );
};

export default Dropdownhostel;
