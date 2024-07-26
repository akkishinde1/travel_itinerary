import React, { useEffect, useState } from 'react';
import Card from './Card';
import Search from './Search';

function Tours({ tours, removeTour }) {
  const [filteredTours, setFilteredTours] = useState(tours);

  useEffect(() => {
    setFilteredTours(tours);
  }, [tours]);

  const handleSearch = (searchText) => {
    if (searchText === '') {
      setFilteredTours(tours);
    } else {
      const filtered = tours.filter((tour) =>
        tour.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredTours(filtered);
    }
  };

  return (
    <div className='container mt-20'>
      <Search onSearch={handleSearch} />
      <div className='cards'>
        {filteredTours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
