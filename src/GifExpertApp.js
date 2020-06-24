import React, { useState } from "react";

// Components.
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //   const handleAdd = () => {
  //     // TODO: Cualquier opción vale.
  //     //   setCategories(categories.concat(["Gangs of London"]));
  //     // setCategories([...categories, "Gangs of London"]);
  //     setCategories((categories) => [...categories, "Gangs of London"]);
  //   };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
