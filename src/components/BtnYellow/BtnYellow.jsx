import React from "react";
import { Link } from "react-router-dom";

const BtnYellow = ({ text, theLink }) => {
  return (
    <a href={theLink}>
      <button type="button" className="btnYellow">
        {text}
      </button>
    </a>
  );
};

export default BtnYellow;
