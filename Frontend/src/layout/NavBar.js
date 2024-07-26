import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import { logout } from '../utils/Auth';

function NavBar({ user, onLogin, onLogout }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <div>
      <nav className='sticky top-0 z-10 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-800'>
        <div className='container flex items-center justify-between px-4 py-3 mx-auto'>
          <div className='flex items-center'>
            <a
              className='text-3xl font-extrabold tracking-wider text-white transition duration-300 hover:text-yellow-300'
              href='/'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C10.3 2 8.7 2.6 7.4 3.6L4.5 1.5C3.9 1.2 3.2 1.5 2.8 2.1C2.4 2.7 2.7 3.4 3.3 4L5.2 5.1C4.8 6.1 4.5 7.2 4.5 8.4C4.5 10.2 5.3 11.9 6.7 13.1L4.5 15.3C3.9 15.9 3.6 16.6 3.6 17.3C3.6 18.1 4.1 18.6 4.9 18.6C5.6 18.6 6.2 18.1 6.2 17.3C6.2 16.6 5.9 15.9 5.3 15.3L7.4 13.2C8.8 14.4 10.5 15.2 12.3 15.2C14.1 15.2 15.8 14.4 17.2 13.2L19.3 15.3C19.9 15.9 20.2 16.6 20.2 17.3C20.2 18.1 19.7 18.6 19 18.6C18.3 18.6 17.7 18.1 17.7 17.3C17.7 16.6 18 15.9 18.6 15.3L16.5 13.2C17.9 11.9 18.7 10.2 18.7 8.4C18.7 7.2 18.4 6.1 18 5.1L19.9 4C20.5 3.4 20.8 2.7 20.4 2.1C20 1.5 19.3 1.2 18.7 1.5L15.8 3.6C14.5 2.6 12.9 2 12 2Z"></path>
              </svg>
              Tripit<span className='text-yellow-300'>✈️</span>
            </a>
          </div>
          <div className='flex items-center ml-auto space-x-4'>
            {user ? (
              <button
                className='px-6 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out transform bg-red-500 rounded-full hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50'
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  className='px-6 py-2 text-sm font-semibold text-blue-600 transition duration-300 ease-in-out transform bg-white rounded-full hover:bg-blue-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
                  onClick={() => setShowLoginForm(true)}
                >
                  Login
                </button>
                <button
                  className='px-6 py-2 text-sm font-semibold text-blue-800 transition duration-300 ease-in-out transform bg-yellow-400 rounded-full hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50'
                  onClick={() => setShowRegistrationForm(true)}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* Modal for Login and Registration forms */}
      {(showLoginForm || showRegistrationForm) && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm'>
          <div className='w-full max-w-md mx-4 bg-white rounded-lg shadow-xl popup'>
            {showLoginForm && (
              <LoginForm
                onClose={() => setShowLoginForm(false)}
                onLogin={onLogin}
              />
            )}
            {showRegistrationForm && (
              <RegistrationForm
                onClose={() => setShowRegistrationForm(false)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
