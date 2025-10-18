// import React, { createContext, useState, useEffect } from "react";

// export const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState(() => {
//     // Load from localStorage on first render
//     const saved = localStorage.getItem("favorites");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     // Save to localStorage whenever favorites change
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const addFavorite = (recipe) => {
//     if (!favorites.some((f) => f.id === recipe.id)) {
//       setFavorites([...favorites, recipe]);
//     }
//   };

//   const removeFavorite = (id) => {
//     setFavorites(favorites.filter((f) => f.id !== id));
//   };

//   return (
//     <div>
//       <p>hi</p>
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
  
//     </FavoritesContext.Provider>
//     </div>
//   );
// };
