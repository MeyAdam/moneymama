import classNames from "classnames";
import React from "react";
import css from "./WrapperWhite.module.css";

const WrapperWhite = ({ children, className }) => {
  return (
    <div className={classNames(css.wrapperWhite, className)}>{children}</div>
  );
};

export default WrapperWhite;
