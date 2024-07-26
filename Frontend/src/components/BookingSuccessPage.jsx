import React, { useEffect, useState } from 'react';

const BookingSuccessPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const storedBookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    if (storedBookingDetails) {
      setBookingDetails(storedBookingDetails);
    }
  }, []);

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-center text-green-600">
          Booking Successful!
        </h1>
        <p className="mb-6 text-lg text-center text-gray-700">
          Thank you for your booking! Your reservation has been confirmed.
        </p>
        <div className="flex justify-center mb-4">
          <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5 14.59L10.59 10 12 8.59 15 11.59 18.59 8 20 9.41l-5 5z"></path>
          </svg>
        </div>
        <p className="mb-4 text-center text-gray-500">Your booking details:</p>
        <ul className="mb-6 text-left text-gray-600">
          <li>Booking ID: <strong>{bookingDetails.id}</strong></li>
          <li>Date: <strong>{new Date(bookingDetails.selectedDate).toLocaleDateString()}</strong></li>
          <li>Number of Travelers: <strong>{bookingDetails.numTravelers}</strong></li>
          <li>Total Price: <strong>₹{bookingDetails.totalPrice.toLocaleString()}</strong></li>
        </ul>
        <a
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
