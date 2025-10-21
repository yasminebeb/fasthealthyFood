import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PageRecipe = ({ data }) => {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === Number(id));

  if (!recipe) return <p>Recipe not found or still loading...</p>;


  // console.log(data);






return (
    <div >
<section className="w-full py-10">
  <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  gap-6 px-4">
    {/* Left Column (double width) */}
    <div className="col-span-1  bg-[#154b43] p-6 rounded-lg ">


       <div   className="font-bold text-[#ffffff]" style={ {fontSize: '60px'} }  > {recipe.name} </div>
    
          <div  className="text-[rgb(204,242,223)] text-xl"> 
            <p>cusin: {recipe.cuisine}</p>
        <p> difficulty: {recipe.difficulty}</p>
      
          <p>rate: {recipe.rating}</p>

            <h2 className="font-bold pt-4 text-[#ffffff]"> ingredients</h2>
          {recipe.ingredients.map((item, index) => (
        <p key={index}>{item}</p>
      ))}


  <h2 className="font-bold pt-4 text-[#ffffff]"> Direction</h2>
   <p>{recipe.instructions.join(", ")}</p>

          </div> 

   
    </div>

    {/* Right Column (one-third width) */}
    <div className="col-span-1  p-6 rounded-lg ">
<img
      width="620"
      src={recipe.image}
      alt={recipe.name}
      style={{ borderRadius: "8px", marginTop: "5px" }}
    />
    {/* <div> <button className="bg-[#86ff58] font-bold py-2  mt-2 px-3  m-l-4 rounded">  add to favorite</button></div> */}
  </div></div>
</section>






 


  




</div>
   
  );
};

export default PageRecipe;




      

{/* {data.length > 4 && (
  <>
    <img
      width="620"
      src={data[4].image}
      alt={data[4].name}
      style={{ borderRadius: "8px", marginTop: "5px" }}
    />
    <p  style={{
         
          fontSize: "20px",
         
         }}>{data[4].name}</p>
  <p>{data[4].cuisine}</p>
   <p>{data[4].difficulty}</p>
    <p>{data[4].rating}</p>
   
    <ul>
      {data[4].ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p>{data[4].instructions.join(", ")}</p>
  </>
)} */}
