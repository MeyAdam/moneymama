import React from "react";
import { Link } from "react-router-dom";

const BtnOutline = ({ text }) => {
  return (
    <a href="#">
      <button type="button" className="btnOutline">
        {text}
      </button>
    </a>
  );
};

export default BtnOutline;
