import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setData(data.recipes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

console.log(data);
    
  
let imageUrl = "";
let namerandom= "hi";
let  instructrandom = "hi";
let   Udd= "5";

if (data.length > 0) {
  const randomIndex = Math.floor(Math.random() * data.length);
  imageUrl = data[randomIndex].image; // ✅ corrected
   namerandom  = data[randomIndex].name; // ✅ corrected
      instructrandom  = data[randomIndex].instructions; // ✅ corrected
      Udd=data[randomIndex].id;

     
}
  return (
    <div>
     
 

<div   style={{
       backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",       // makes image fill the element
        backgroundPosition: "center",  // centers it
        backgroundRepeat: "no-repeat", // avoids repeating
        height: "60vh",               // full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
     

      }} className="blurred-overlay">  

<div className=" max-w-[900px] text-emerald-950 bg-[#ccf2df] mx-auto grid p-9 rounded-3xl" >
      <div   className="font-bold" style={ {fontSize: '60px'} } >  {namerandom }</div>
  <div>  { instructrandom.slice(0, 20)} 
    
    <div >

       <Link to={`/PageRecipe/${Udd}`}>
     
    <button className="bg-[#86ff58] font-bold py-2  mt-2 px-3  m-l-4 rounded">  Full Recipe</button>
    </Link>
    
    </div >
    
    </div> 
</div>
      </div>




 {/* for-you*/}

<div className="max-w-6xl mx-auto p-4 py-12" >
  <h3 className="text-lg py-3 text-amber-50 font-semibold ">More</h3>

    {/* Card 1 */}

 {data.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {data
      .sort(() => 0.3 - Math.random()) // shuffle the array randomly
      .slice(0, 3) // take first 6 random items
      .map((recipe) => (

        
        <div  lassName="bg-white shadow-md rounded-lg overflow-hidden" key={recipe.id}>
        
          <Link to={`/PageRecipe/${recipe.id}`}> <img width="200px"  src={recipe.image} alt={recipe.name}  className=" rounded-lg w-full h-48 object-cover" /></Link>
           <div>  <h3 className="text-lg pt-3 text-amber-50 font-semibold">{recipe.name} </h3>  </div>
        </div>
      ))}
  </div>
) : (
  <p>Loading recipes...</p>
)}


</div>
 {/* end- for-you*/}








<section className="bg-[#ccf2df] w-full py-10">
  <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6 px-4">
    {/* Left Column (double width) */}
    <div className="col-span-1 p-6 rounded-lg ">


       <div   className="font-bold" style={ {fontSize: '40px'} } >  Special 360</div>
    
      <p>🍮✨ Healthy Cream Caramel Recipe! ✨🍮
Ditch the sugar and dive into deliciousness with our Cream Caramel made with dates! Sweet, creamy, and guilt-free!
🌿 Why You'll Love It:
-Naturally sweetened with dates
-less refined sugar
-Simple and wholesome ingredients
-Bursting with flavor and nutrients
Transform your dessert game with this easy-to-make, healthier alternative. Perfect for any occasion or just a treat-yourself moment!
👇 Get the Recipe on momento360</p><Link to={`https://rb.gy/rc07it`}>
     
    <button className="bg-[#86ff58] font-bold py-2  mt-2 px-3  m-l-4 rounded">  Full Recipe</button>
    </Link>
   
    </div>

    {/* Right Column (one-third width) */}
    <div className=" col-span-2 p-6 rounded-lg ">
    
    
   <img  src="/special-cream.png" alt="Logo" />
    </div>
  </div>
</section>













 {/* italian */}



<div className="max-w-6xl mx-auto p-4 py-12" >
<h3 className="text-lg py-3 text-amber-50 font-semibold ">Juat from Italian Cusin </h3>
    {/* Card 1 */}

 {data.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {data
    .filter((refcipe) => refcipe.cuisine === "Italian") // ✅ show only Italian recipes
      .sort(() => 0.3 - Math.random()) // shuffle the array randomly
      .slice(0, 3) // take first 6 random items
      .map((recipe) => (

        
        <div  className="rounded-lg overflow-hidden" key={recipe.id}>
        
          <Link to={`/PageRecipe/${recipe.id}`}> <img width="200px"  src={recipe.image} alt={recipe.name}  className=" rounded-lg w-full h-48 object-cover" /></Link>
           <div>  <h3 className="text-lg pt-3 text-amber-50 font-semibold">{recipe.name} </h3>  </div>
        </div>
      ))}
  </div>
) : (
  <p>Loading recipes...</p>
)}


</div>
 {/* end- fitalian*/}


















            
      {/* {data.length > 0 ? (
  <ul>
    {data
      .sort(() => 0.3 - Math.random()) // shuffle the array randomly
      .slice(0, 3) // take first 6 random items
      .map((recipe) => (
        <li key={recipe.id}>
          {recipe.name}
          <Link to={`/PageRecipe/${recipe.id}`}> <img width="200px" src={recipe.image} alt={recipe.name} /></Link>
        </li>
      ))}
  </ul>
) : (
  <p>Loading recipes...</p>
)} */}
<div> end</div>


      {/* {data.length > 0 ? (
        <ul>
          
          {data.map((recipe) => (
           
            <li key={recipe.id}>{recipe.name}    <img  width="200px;" src={recipe.image}/> </li>
          
          ))}
        </ul>
      ) : (
        <p>Loading recipes...</p>
      )} */}


{/* 
      {data.length > 0 ?  (
  <ul>
    {data
     .filter((refcipe) => refcipe.cuisine === "Italian") // ✅ show only Italian recipes
      .sort(() => 0.3 - Math.random()) // shuffle the array randomly
      .slice(0, 3) // take first 6 random items
      .map((recipe) => (
        <li key={recipe.id}>
          {recipe.name}
          <img width="200px" src={recipe.image} alt={recipe.name} />
        </li>
      ))}
  </ul>
) : (
  <p>Loading recipes...</p>
)} */}
<div> end</div>



    </div>
  );
};

export default Home;