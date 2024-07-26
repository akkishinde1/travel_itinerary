import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    onSearch(searchText); 
  };

  return (
    <div className='mx-5'>
      <input
        type='text'
        placeholder='Search...'
        className='h-10 px-2 py-1 border-2 border-red-500 rounded-md color-red-500' 
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
