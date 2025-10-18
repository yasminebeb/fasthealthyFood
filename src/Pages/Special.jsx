import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Special = () => {
  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setData(data.recipes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);



  const filteredRecipes = data.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="max-w-6xl mx-auto p-4 py-12">



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-amber-50 font-semibold">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
    <Link to="https://rb.gy/rc07it" className="flex justify-center">
      <img
        src="/special-cream.png"
        alt="Logo"
        className="w-3/5 object-contain"
      />
    </Link>
  </div>
</div>





    </div>
  );
};

export default Special;