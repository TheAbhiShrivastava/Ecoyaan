import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 pl-10 text-3xl font-bold">
          Ecoyaan
        </div>
        <div className="hidden md:flex space-x-20 px-16 ">
          <Link to="/" className="text-black text-xl font-semibold transform transition-transform duration-300 hover:scale-125 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-black text-xl font-semibold transform transition-transform duration-300 hover:scale-125 hover:text-gray-900">About Us</Link>
          <Link to="/sell" className="text-black text-xl font-semibold transform transition-transform duration-300 hover:scale-125 hover:text-gray-900">Sell on Ecoyaan</Link>
          <Link to="/careers" className="text-black text-xl font-semibold transform transition-transform duration-300 hover:scale-125 hover:text-gray-900">Careers</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <Link to="/" onClick={toggleMenu} className="block text-black text-xl font-semibold hover:text-green-200">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="block text-black text-xl font-semibold hover:text-green-200">About Us</Link>
            <Link to="/sell" onClick={toggleMenu} className="block text-black text-xl font-semibold hover:text-green-200">Sell on Ecoyaan</Link>
            <Link to="/careers" onClick={toggleMenu} className="block text-black text-xl font-semibold hover:text-green-200">Careers</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
