import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Corrected the import for NavLink
import { HiOutlineX } from 'react-icons/hi'; // Import the correct close icon
import { FaBars } from 'react-icons/fa'; // Import the menu icon

const Header = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="bg-black text-white px-5 py-3 flex justify-between items-center">
      <div>
        <h1 className="text-xl">Blog Slice</h1>

        {/* Show dropdown navigation only when toggle value is true */}
        {/* jjjjnj */}
        {show && (
          <nav className="mt-1 sm:flex hidden">
            <NavLink to="/login" className="underline underline-offset-4">
              Login
            </NavLink>
          </nav>
        )}
      </div>

      {/* Button depends on toggle value */}
      <div className="sm:flex hidden mt-1">
        {show ? (
          <button onClick={handleToggle}>
            <HiOutlineX size={22} />
          </button>
        ) : (
          <button onClick={handleToggle}>
            <FaBars size={22} />
          </button>
        )}
      </div>

      {/* Mobile navigation */}
      {!show && (
        <nav className="sm:hidden">
          <NavLink to="/login" className="underline underline-offset-4">
            Login
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Header;
