
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import React, { useEffect, useState } from "react";

import Home from './Pages/Home'
import RecipesSearch from './Pages/RecipesSearch'
import InFridge from './Pages/InFridge'


import Special from './Pages/Special'
import PageRecipe from './Pages/PageRecipe'

import Contact from './Pages/Contact'
import { Routes, Route } from 'react-router-dom'
import './index.css'; // Import Tailwind CSS here




const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setData(data.recipes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);


  return (
    <div  className=" bg-[#10413a] bg-[url(assets/pix/bg-web.png)] " >
           <NavBar />

                  <Routes>
                    <Route path="/" element={<Home data={data} />} />
                    <Route path="/Special" element={<Special />} />
                    <Route path="/InFridge" element={<InFridge />} />
                    <Route path="/RecipesSearch" element={<RecipesSearch data={data} />} />
                    <Route path="/PageRecipe/:id" element={<PageRecipe data={data} />} />
                    <Route path="/Contact" element={<Contact />} />
                  </Routes>

                  <Footer />
    </div>
  )
}

export default App