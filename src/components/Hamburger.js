import React from "react";

const Hamburger = () => {
  return (
    <svg
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="28"
        height="2.66667"
        rx="1.33333"
        transform="matrix(1 0 0 -1 0 2.66666)"
        fill="#4C4747"
      />
      <rect
        width="28"
        height="2.66667"
        rx="1.33333"
        transform="matrix(1 0 0 -1 0 9.33334)"
        fill="#4C4747"
      />
      <rect
        width="28"
        height="2.66667"
        rx="1.33333"
        transform="matrix(1 0 0 -1 0 16)"
        fill="#4C4747"
      />
    </svg>
  );
};

export default Hamburger;
