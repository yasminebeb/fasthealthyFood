// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Special = () => {
//   const [data, setData] = useState([]);
// const specialRecipe = [
//   {
//     name: "Cream Caramel",
//     desc: "Bingo! Beautiful deep colour, sugar-like flavour, silky smooth, and ZERO after-taste or odd mouth sensation. This one was pretty special. So special, in fact, that I made another identical batch. Left it to solidify. Re-heated it. And it was good to go again. Wow. That had never happened with other keto-friendly sweeteners.",
//     link: "https://momento360.com/#ud/441bfadd726940acaf21c97730cb9a60",
//     img: "/special-cream.png"
//   },
//   {
//     name: "Korean Vegetable Pancake",
//     desc: "A Korean vegetable pancake! This crispy, healthy, delicious, simple vegetarian pancake is a traditional Korean favorite with a lot of flavor and room for variation. It’s a great way to celebrate the freshness and newness of spring!",
//     link: "https://momento360.com/#ud/663c74a1ff744fadbf2590ea9638b152",
//     img: "/pancake.png"
//   },
//   {
//     name: "Lemon Bar",
//     desc: "Lemon bars are one of the EASIEST desserts to make but they’re guaranteed to bring a smile to your face. I love the soft lemon filling paired with a crisp shortbread crust and the flavor is beyond delicious; so bright and zingy with all the lemon flavor from the juice and zest, they’re simply irresistible!",
//     link: "https://momento360.com/#ud/318e090949e443a08c62abf5ae8ca45a",
//     img: "/lemon.png"
//   },
//   {
//     name: "Chocolate Avocado Mousse",
//     desc: "The idea of avocado chocolate mousse has been popular on the health food scene for years, but some of the recipes out there are unfortunately so awful they only prove true mainstream society’s claim that avocado chocolate mousse is too weird or too healthy to really be dessert.",
//     link: "https://momento360.com/#ud/becafdc8c765479085f62816d60bd4cd",
//     img: "/mouse.png"
//   }
// ];


//   const [searchTerm, setSearchTerm] = useState(""); 

//   useEffect(() => {
//     fetch("https://dummyjson.com/recipes")
//       .then((response) => response.json())
//       .then((data) => setData(data.recipes))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   console.log(data);



//   const filteredRecipes = data.filter((recipe) =>
//     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return (
//     <div className="max-w-6xl mx-auto p-4 py-12">



// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-amber-50 font-semibold">
//   <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
//     <Link to="https://rb.gy/rc07it" className="flex justify-center">
//       <img
//         src="/special-cream.png"
   
//         className="w-3/5 object-contain"
//       />
//     </Link>
//   </div>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
//     <p> hi</p>
//   </div>
// </div>








//     </div>
//   );
// };

// export default Special;




import React from "react";
import { Link } from "react-router-dom";

const Special = () => {
  const specialRecipe = [
    {
      name: "Cream Caramel",
      desc: "Bingo! Beautiful deep colour, sugar-like flavour, silky smooth, and ZERO after-taste or odd mouth sensation. This one was pretty special. So special, in fact, that I made another identical batch. Left it to solidify. Re-heated it. And it was good to go again. Wow. That had never happened with other keto-friendly sweeteners.",
      link: "https://momento360.com/e/u/441bfadd726940acaf21c97730cb9a60?utm_campaign=embed&utm_source=other&size=medium&display-plan=true",
      img: "/special-cream.png"
    },
    {
      name: "Korean Vegetable Pancake",
      desc: "A Korean vegetable pancake! This crispy, healthy, delicious, simple vegetarian pancake is a traditional Korean favorite with a lot of flavor and room for variation. It’s a great way to celebrate the freshness and newness of spring!",
      link: "https://momento360.com/#ud/663c74a1ff744fadbf2590ea9638b152",
      img: "/pancake.png"
    },
    {
      name: "Lemon Bar",
      desc: "Lemon bars are one of the EASIEST desserts to make but they’re guaranteed to bring a smile to your face. I love the soft lemon filling paired with a crisp shortbread crust and the flavor is beyond delicious; so bright and zingy with all the lemon flavor from the juice and zest, they’re simply irresistible!",
      link: "https://momento360.com/#ud/318e090949e443a08c62abf5ae8ca45a",
      img: "/lemon.png"
    },
    {
      name: "Chocolate Avocado Mousse",
      desc: "The idea of avocado chocolate mousse has been popular on the health food scene for years, but some of the recipes out there are unfortunately so awful they only prove true mainstream society’s claim that avocado chocolate mousse is too weird or too healthy to really be dessert.",
      link: "https://momento360.com/#ud/becafdc8c765479085f62816d60bd4cd",
      img: "/mouse.png"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 py-12">
      {specialRecipe.map((recipe, index) => (
        <div
          key={index}
          className="grid grid-cols-3 gap-6 text-amber-50 font-semibold mb-10"
        >
          {/* 🟡 Image section — double width */}
          <div className="col-span-2 flex justify-center">
            <Link to={recipe.link} target="_blank" className="flex justify-center">
              <img
                src={recipe.img}
                alt={recipe.name}
                className="w-4/5 object-contain"
              />
            </Link>
          </div>

          {/* 🟢 Text section */}
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-amber-200 text-xl mb-2">{recipe.name}</h2>
            <p className="text-sm">{recipe.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Special;