import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/pix/logo.svg"; // adjust path to your file

const Footer = () => {
  return (
    <>
    <div className='bg-[#10413a]'>
<div className="max-w-[1200px] mx-auto grid grid-cols-6 gap-4 pt-6  pb-3">
  <div className="col-span-1 p-4"><img src={logo} alt="Logo"  className='h-20' /></div>
  <div className="col-span-5 p-4 gap-4 pt-6 text-white text-lg flex justify-end bold">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/RecipesSearch">RecipesSearch</Link></span>
        <span><Link to="/Special">Special</Link></span>
         <span><Link to="/PageRecipe"> PageRecipe</Link></span>
       
        <span><Link to="/Contact">Contact</Link></span>
      </div>

     
</div>
<div className="text-[#5da290] max-w-[1200px] mx-auto flex items-center justify-center gap-2 pb-6 pt-3">
  <span>
    All copyright reserved to{" "}
    <a
      href="https://www.behance.net/yasminebebars"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-[#4c8c7b]"
    >
      Yasmine Bebars
    </a>
  </span>
  <a
    href="https://web.facebook.com/profile.php?id=61556149274910&locale=ar_AR"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="w-[30px]" src="/face.png" alt="Facebook" />
  </a>
</div>

  </div>
    </>
  )
}

export default Footer
