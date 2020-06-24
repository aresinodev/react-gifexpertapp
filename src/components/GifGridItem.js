import React from "react";

export const GifGridItem = ({ id, url, title }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} loading="lazy" />
      <p>{title}</p>
    </div>
  );
};
