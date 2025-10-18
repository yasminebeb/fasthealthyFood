
import { Link } from "react-router-dom";


import React, { useState, useEffect } from "react";

function InFridge() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes));
  }, []);

  const handleCheck = (ingredient) => {
    if (selected.includes(ingredient)) {
      setSelected(selected.filter((item) => item !== ingredient)); // remove if unchecked
    } else {
      setSelected([...selected, ingredient]); // add if checked
    }
  };

  const filteredData = data.filter((recipe) => {
    // show all recipes if nothing selected
    if (selected.length === 0) return true;

    // ✅ show recipe only if it has ALL selected ingredients
    for (let i = 0; i < selected.length; i++) {
      const ingredient = selected[i].toLowerCase();
      const hasIngredient = recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(ingredient)
      );
      if (!hasIngredient) return false; // if one ingredient missing, skip this recipe
    }
    return true; // all found ✅
  });

  return (
    <div>
     <div className="bg-[#1c6056]">
<div className="max-w-6xl mx-auto p-4 py-12" >
     <h3 className="py-3 text-amber-50 text-2xl  pb-12 ">I Have IN The Fridge</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6   text-amber-50 font-semibold" >

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  ">
  <div>
    <img
      src="/egg.png"
      alt="Recipe search"
      className="w-full h-auto object-cover px3 px-3"
    />
  </div>

  <div className="flex items-center gap-2">
    <input type="checkbox" onChange={() => handleCheck("egg")} />
    <label>Tomato</label>
  </div>
</div>



      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  ">
  <div>
    <img
      src="/tomato.png"
      alt="Recipe search"
      className="w-full h-auto object-cover px3 px-3"
    />
  </div>

  <div className="flex items-center gap-2">
    <input type="checkbox" onChange={() => handleCheck("tomato")} />
    <label>Tomato</label>
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 ">
  <div>
    <img
      src="milk.png"
      alt="Recipe search"
      className="w-full h-auto object-cover px3 px-3"
    />
  </div>

  <div className="flex items-center gap-2">
    <input type="checkbox" onChange={() => handleCheck("milk")} />
    <label>Milk</label>
  </div>
</div>






<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 ">
  <div>
    <img
      src="/onion.png"
      alt="Recipe search"
      className="w-full h-auto object-cover px3 px-3"
    />
  </div>

  <div className="flex items-center gap-2">
    <input type="checkbox" onChange={() => handleCheck("onion")} />
    <label>Tomato</label>
  </div>
</div>





<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 ">
  <div>
    <img
      src="/carrot.png"
      alt="Recipe search"
      className="w-full h-auto object-cover px3"
    />
  </div>

  <div className="flex items-center gap-2">
    <input type="checkbox" onChange={() => handleCheck("carrot")} />
    <label>Tomato</label>
  </div>
</div>





      </div>
      </div>
</div>


     <div className="max-w-6xl mx-auto p-4 py-12" >

  <h3 className="py-3 text-amber-50 text-2xl  pb-12 ">  </h3>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {filteredData.map((recipe) => (


<div>

           <div  lassName="bg-white shadow-md rounded-lg overflow-hidden" key={recipe.id}>
              
                <Link to={`/PageRecipe/${recipe.id}`}> <img width="200px"  src={recipe.image} alt={recipe.name}  className=" rounded-lg w-full h-48 object-cover" /></Link>
                 <div>  <h3 className="text-lg pt-3 pb-4 text-amber-50 font-semibold">{recipe.name} </h3>  </div>
              </div>
            
            
            
            </div>




     
     
        )
        
        
        ) }
     </div>
      </div>
    </div>
  );
}

export default InFridge;




