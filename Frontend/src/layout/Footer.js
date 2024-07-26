import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="container p-4 mx-auto mt-8 text-center text-white border rounded bg-gradient-to-r from-blue-600 to-indigo-800">
        <a
          href="https://github.com/Gaurav-guru/trip-it"
          className="text-white transition duration-300 hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Gaurav-guru/trip-it
        </a>
        <div className="mt-2">
          &copy; {currentYear} Tripit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
