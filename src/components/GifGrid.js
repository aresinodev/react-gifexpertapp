import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

// Components.
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {images &&
          images.length > 0 &&
          images.map((image) => <GifGridItem key={image.id} {...image} />)}
      </div>
    </>
  );
};
