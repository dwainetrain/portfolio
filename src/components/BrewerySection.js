import React from "react";

const BrewerySection = ({ pageInfo: { title, description } }) => {
  return (
    <>
      <h1 className="section-header">{title}</h1>
      <p>Description: {description}</p>
    </>
  );
};

export default BrewerySection;
