import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pix/logo.svg"; // adjust path if needed

const NavBar = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-6 gap-4 pt-1 pb-3">
      <div className="col-span-1 p-4">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="col-span-5 p-4 pt-6 text-white text-lg flex justify-end space-x-8 font-bold">
        <Link className="hover:text-amber-300 transition" to="/">Home</Link>
        <Link className="hover:text-amber-300 transition" to="/RecipesSearch">RecipesSearch</Link>
        <Link className="hover:text-amber-300 transition" to="/Special">Special</Link>
        <Link className="hover:text-amber-300 transition" to="/InFridge">In My Fridge</Link>
        <Link className="hover:text-amber-300 transition" to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;