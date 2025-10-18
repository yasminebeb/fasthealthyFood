import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipesSearch = () => {
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



    <div>



      
<div className="bg-[#1c6056]">
<div className="max-w-6xl mx-auto p-4 py-2 pt-12 " >

<input className="bg-[#ccf2df]"
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "250px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
  </div>
  </div>





      
<div className="max-w-6xl mx-auto p-4 py-12" >
  <h3 className="py-3 text-amber-50 text-2xl  pb-12 "> {filteredRecipes.length} recipes </h3>
       {filteredRecipes.length > 0 ? (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {filteredRecipes.map((recipe) => (

<div>

           <div  lassName="bg-white shadow-md rounded-lg overflow-hidden" key={recipe.id}>
              
                <Link to={`/PageRecipe/${recipe.id}`}> <img width="200px"  src={recipe.image} alt={recipe.name}  className=" rounded-lg w-full h-48 object-cover" /></Link>
                 <div>  <h3 className="text-lg pt-3 pb-4 text-amber-50 font-semibold">{recipe.name} </h3>  </div>
              </div>
            
            
            
            </div>

          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
 </div>

    </div>
  );
};

export default RecipesSearch;