import React, { useState, useRef, useEffect } from 'react';
import Login from '../API/Login';

function LoginForm({ onClose, onLogin }) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await Login(BASE_URL, formData.email, formData.password);

      if (userData) {
        setFormData({
          email: '',
          password: '',
        });
        onClose();
        onLogin(userData);
      } else {
        console.error('Login was unsuccessful.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm'>
      <div className='w-full max-w-sm p-6 overflow-hidden bg-white rounded-lg shadow-lg' ref={formRef}>
        <h2 className='mb-6 text-2xl font-bold text-center text-gray-800'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-bold text-gray-700'
            >
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-bold text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
            >
              Login
            </button>
          </div>
        </form>
        <div className='mt-4 text-center'>
          <button
            onClick={onClose}
            className='text-blue-500 transition duration-300 hover:text-blue-700'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
