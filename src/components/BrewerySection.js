import React from "react";

const BrewerySection = ({ pageInfo: { title, description } }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>Description: {description}</p>
    </>
  );
};

export default BrewerySection;
