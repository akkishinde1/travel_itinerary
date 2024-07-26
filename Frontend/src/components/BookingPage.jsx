import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isLoggedIn } from '../utils/Auth';

function BookingPage() {
  const navigate = useNavigate();
  const [numTravelers, setNumTravelers] = useState(1); // Default to 1 traveler
  const [date, setDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [destination, setDestination] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch destination data from localStorage
    const storedDestination = JSON.parse(localStorage.getItem('destination'));
    if (storedDestination) {
      setDestination(storedDestination);
    } else {
      navigate('/'); // Redirect if no destination is found
    }
  }, [navigate]);

  useEffect(() => {
    // Fetch user data from localStorage
    const loggedInUser = isLoggedIn();
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      navigate('/'); // Redirect if no user is logged in
    }
  }, [navigate]);

  useEffect(() => {
    if (destination && numTravelers > 0) {
      setTotalPrice(destination.price * numTravelers);
    } else {
      setTotalPrice(0);
    }
  }, [numTravelers, destination]);

  const handleTravelersChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumTravelers(isNaN(value) || value <= 0 ? 1 : value); // Default to 1 if not a valid number or less than 1
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleConfirm = async () => {
    if (!user || !destination) {
      alert('Error: User or destination information is missing.');
      return;
    }

    const bookingDetails = {
      user: { id: user.id }, // Simplified for sending user ID
      destination: { id: destination.id }, // Simplified for sending destination ID
      numTravelers,
      selectedDate: date,
      totalPrice
    };

    try {
      const response = await axios.post('http://localhost:8080/api/bookings', bookingDetails);
      const savedBooking = response.data;
      alert('Booking confirmed!');
      localStorage.removeItem('destination'); // Clear the destination data from localStorage
      localStorage.setItem('bookingDetails', JSON.stringify(savedBooking)); // Store the booking details
      navigate('/success'); // Redirect to success page
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to confirm booking. Please try again.');
    }
  };

  if (!destination || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-page">
      <h2>Booking Details</h2>
      <div className="booking-form">
        <label htmlFor="travelers">Number of Travelers:</label>
        <input
          type="number"
          id="travelers"
          value={numTravelers}
          onChange={handleTravelersChange}
          min="1"
          required
        />
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
        <p className="total-price">Total Price: ₹{totalPrice.toLocaleString()}</p>
        <button className="btn-confirm" onClick={handleConfirm}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookingPage;
