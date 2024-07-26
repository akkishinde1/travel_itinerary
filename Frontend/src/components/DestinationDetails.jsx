import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/destinations/${id}`);
        const data = await response.json();
        setDestination(data);
        localStorage.setItem('destination', JSON.stringify(data)); // Store data in localStorage
      } catch (error) {
        console.error('Error fetching destination:', error);
      }
    };

    fetchDestination();
  }, [id]);

  const handleBookNow = () => {
    navigate('/booking'); // Redirect to the BookingPage
  };

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="destination-details">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <div className="destination-info">
        <h2 className="destination-name">{destination.name}</h2>
        <p className="destination-description">{destination.info}</p>
        <p className="destination-price">Price: ₹{destination.price}</p>
      </div>
      <div className="book-now-container">
        <button className="btn-book-now" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default DestinationDetails;
