import React from "react";
import { Link } from "react-router-dom";

const BtnYellow = ({ text }) => {
  return (
    <a href="#">
      <button type="button" className="btnYellow">
        {text}
      </button>
    </a>
  );
};

export default BtnYellow;
