import React from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./EstimatedAmt.module.css";

const EstimatedAmt = ({ retirementGoal, setRetirementGoal }) => {
  return (
    <section className={css.sectionEstimatedAmt}>
      <WrapperWhite className={css.wrapperEstimatedAmt}>
        <p className={css.title}>Estimated amount you need to retire</p>
        <p className={css.amount}>RM{retirementGoal.toLocaleString()}</p>
      </WrapperWhite>
    </section>
  );
};

export default EstimatedAmt;
