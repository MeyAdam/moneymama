import React from "react";
import css from "./EstimatedAmt.module.css";
import WrapperWhite from "../WrapperWhite/WrapperWhite";

const EstimatedAmt = () => {
  return (
    <section className={css.sectionEstimatedAmt}>
      <WrapperWhite className={css.wrapperEstimatedAmt}>
        <p style={{ color: "var(--grey01)" }}>
          Estimated amount you need to retire
        </p>
        <p className={css.amount}>RM1,600,000</p>
      </WrapperWhite>
    </section>
  );
};

export default EstimatedAmt;
