import React from "react";
import { Link } from "react-router-dom";

const BtnOutline = ({ text, onClick, theLink }) => {
  const handleClick = (e) => {
    if (theLink?.startsWith("#")) {
      e.preventDefault(); // Prevent default anchor behavior
      const target = document.querySelector(theLink);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) {
      onClick(); // Call any additional onClick handler
    }
  };

  return (
    <a
      href={theLink?.startsWith("#") ? theLink : undefined}
      onClick={handleClick}
    >
      <button type="button" className="btnOutline">
        {text}
      </button>
    </a>
  );
};

export default BtnOutline;
