import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';

import { isLoggedIn, login, logout } from './utils/Auth';
import Tours from './components/Tours.jsx';
import DestinationDetails from './components/DestinationDetails.jsx';
import BookingPage from './components/BookingPage.jsx';
import axios from 'axios';
import BookingSuccessPage from './components/BookingSuccessPage.jsx';
import HomePage from './components/HomePage.jsx';

function App() {
  const [searchText, setSearchText] = useState('');
  const [user, setUser] = useState(null);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const loggedInUser = isLoggedIn();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/destinations');
      setTours(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleSearch = (searchQuery) => {
    setSearchText(searchQuery);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    login(userData);
  };

  const handleLogout = () => {
    setUser(null);
    logout();
  };

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar
          user={user}
          onSearch={handleSearch}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        
        <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route path='/home' element={<Tours tours={tours} removeTour={removeTour} />} />
          <Route path='/destination/:id' element={<DestinationDetails />} />
          <Route path='/booking' element={<BookingPage />}/>
          <Route path="/success" element={<BookingSuccessPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
