import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex fixed w-full top-0 items-center justify-between z-50  py-4 px-8 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/bag.png" className='w-[50px] h-[50px]' alt="" />
        <Link to="/" className="text-xl cursor-pointer font-bold">Click Cart</Link>
        <div className="ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 sm:focus:pr-72 ease duration-200 rounded-lg bg-gray-700 text-white hidden  sm:block outline-none "
          />
        </div>
      </div>
      <div className="flex items-center">
        <FaSearch className="text-xl mx-4" />
        <FaShoppingCart className="text-xl mx-4" />
        <FaUser className="text-xl mx-4" />
      </div>
    </header>
  );
};

export default Header;
