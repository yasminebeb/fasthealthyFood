// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/pix/logo.svg"; // adjust path if needed

// const NavBar = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto grid grid-cols-6 gap-4 pt-1 pb-3">
//       <div className="col-span-1 p-4">
//         <img src={logo} alt="Logo" className="h-20" />
//       </div>
//       <div className="col-span-5 p-4 pt-6 text-white text-lg flex justify-end space-x-8 ">
//         <Link className="hover:text-amber-300 transition" to="/">Home</Link>
//         <Link className="hover:text-amber-300 transition" to="/RecipesSearch">RecipesSearch</Link>
      
//         <Link className="hover:text-amber-300 transition" to="/InFridge">In My Fridge</Link>
//              <Link className="hover:text-amber-300 transition" to="/Special">Special</Link>
//         <Link className="hover:text-amber-300 transition" to="/Contact">Contact</Link>
//       </div>
//     </div>
//   );
// };

// export default NavBar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pix/logo.svg"; // adjust path if needed

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-16" />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link className="hover:text-amber-300 transition" to="/">Home</Link>
          <Link className="hover:text-amber-300 transition" to="/RecipesSearch">RecipesSearch</Link>
          <Link className="hover:text-amber-300 transition" to="/InFridge">In My Fridge</Link>
          <Link className="hover:text-amber-300 transition" to="/Special">Special</Link>
          <Link className="hover:text-amber-300 transition" to="/Contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 text-lg bg-[#1c6056]">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/RecipesSearch">RecipesSearch</Link>
          <Link onClick={() => setIsOpen(false)} to="/InFridge">In My Fridge</Link>
          <Link onClick={() => setIsOpen(false)} to="/Special">Special</Link>
          <Link onClick={() => setIsOpen(false)} to="/Contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
