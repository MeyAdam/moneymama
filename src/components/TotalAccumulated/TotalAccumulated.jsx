import React, { useState } from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./TotalAccumulated.module.css";

const TotalAccumulated = ({
  retiredAge,
  projectedSaving,
  shortAmt,
  saveMonthly,
}) => {
  const [investmentGrowthRate, setInvestmentGrowthRate] = useState(3.12);
  const handleInvestmentGrowthRateChange = (e) => {
    setInvestmentGrowthRate(e.target.value);
  };

  return (
    <section className={css.sectionTotalAccumulated}>
      <WrapperWhite className={css.wrapperTotalAccumulated}>
        <div className={css.boxEstimatedDetails}>
          {/* age is dynamic from retiredAge input */}
          <p className={css.title}>Estimated savings by age {retiredAge}</p>
          <p className={css.amount}>RM{projectedSaving.toLocaleString()}</p>
        </div>

        <div className={css.boxEstimatedDetails}>
          <p className={css.title}>Currently you're short of</p>
          <p className={css.amount}>RM{shortAmt.toLocaleString()}</p>
        </div>

        <div className={css.boxEstimatedDetails}>
          <p className={css.title}>You have to save (monthly)</p>
          <p className={css.amount}>RM{saveMonthly.toLocaleString()}</p>
        </div>

        <div className={css.boxEstimatedDetails}>
          <p className={css.title}>Investment growth rate</p>
          <p style={{ color: "var(--grey02)", fontSize: "16px" }}>
            You'll need to save{" "}
            <span style={{ color: "var(--black)" }}>RM1,200</span> monthly at an
            investment growth rate of{" "}
            <span style={{ color: "var(--black)" }}>
              {investmentGrowthRate}%
            </span>{" "}
            to achieve your goal
          </p>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>%</p>
            <input
              className={css.investmentGrowthRate}
              type="number"
              name="investmentGrowthRate"
              min="0"
              max="100"
              step="0.01"
              value={investmentGrowthRate}
              onChange={handleInvestmentGrowthRateChange}
            />
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default TotalAccumulated;
