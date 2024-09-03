'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Adjust if using a different image loader
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-white p-4    bg-slate-900  w-full shadow-md z-20 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        
        
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <button className="bg-white text-black border border-white px-4 py-2 rounded-full hover:bg-gray-500 hover:text-white transition-colors duration-300">
            Login
          </button>
          
          {/* Sign Up Button */}
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
            Sign Up
          </button>
        </div>

        {/* Navigation and Search Section */}
        <div className="flex-1 flex items-center justify-between md:justify-center">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-black transition-colors duration-300 bg-gray-500 rounded-md px-2 py-1">Home</a>
            <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About</a>
            <a href="#cars" className="hover:text-gray-300 transition-colors duration-300">Fachions</a>
            <a href="#services" className="hover:text-gray-300 transition-colors duration-300">Brands</a>
            <a href="#design" className="hover:text-gray-300 transition-colors duration-300">Design</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Deliver</a>

          </div>

          {/* Search Bar */}
        
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-white hover:text-gray-400 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0  w-72 h-[400px] bg-gray-900 bg-opacity-90  rounded-3xl transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
        <div className="flex flex-col items-center mt-16">
          <a href="#home" className="block text-white hover:text-gray-400 transition-colors duration-300 bg-gray-500 rounded-md px-2 py-1" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>About</a>
          <a href="#cars" className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Fachions</a>
          <a href="#services" className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Brands</a>
          <a href="#design" className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Design</a>
          <a href="#contact" className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
          <a href="#contact" className="block py-2 px-4 text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Deliver</a>

        </div>
      </div>
    </nav>
  );
};

export default Nav
