import React from "react";
import css from "./Conclusion.module.css";

const Conclusion = ({
  retiredAge,
  adjustedInvestmentGrowthRate,
  setAdjustedInvestmentGrowthRate,
}) => {
  const handleAdjustedInvestmentGrowthRateChange = (e) => {
    setAdjustedInvestmentGrowthRate(Number(e.target.value));
  };

  return (
    <section className={css.sectionConclusion}>
      <div className={css.wrapperConclusions}>
        <div className={css.wrapper1}>
          <div className={css.wrapperRetirementGoal}>
            <p className={css.text}>Your retirement goal</p>
            <p className={css.amount}>RM1600001</p>
            <p className={css.text}>to retire at {retiredAge} years old</p>
          </div>
          <div className={css.wrapperMonthlySave}>
            <p className={css.text}>You need to save</p>
            <p className={css.amount}>RM1200/month</p>
            <p className={css.text}>to retire at {retiredAge} years old</p>
          </div>
        </div>

        <div className={css.wrapper2}>
          <p className={css.text}>
            Want to save less or grow your money faster? Adjust your rate below!{" "}
          </p>
          <div className={css.wrapperInvestmentGrowthRate}>
            <p>Investment Growth Rate (%)</p>
            <div className={css.wrapperInputValue}>
              <input
                className={css.rangeInput}
                type="range"
                name="adjustedInvestmentGrowthRate"
                id=""
                min="0"
                max="100"
                step={0.01}
                value={adjustedInvestmentGrowthRate}
                onChange={handleAdjustedInvestmentGrowthRateChange}
                style={{
                  background: `linear-gradient(to right, var(--yellow) ${adjustedInvestmentGrowthRate}%, #F7F8FF ${adjustedInvestmentGrowthRate}%)`,
                }}
              />
              <input
                className={css.numberInput}
                type="number"
                name="adjustedInvestmentGrowthRate"
                id=""
                min="0"
                max="100"
                step={0.01}
                value={adjustedInvestmentGrowthRate}
                onChange={handleAdjustedInvestmentGrowthRateChange}
              />
            </div>
            <p
              style={{
                color: "var(--grey01)",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              You'll need to save{" "}
              <span style={{ fontWeight: "bold", color: "var(--black)" }}>
                RM1,200
              </span>{" "}
              monthly at an investment growth rate of{" "}
              <span style={{ fontWeight: "bold", color: "var(--black)" }}>
                3.12%
              </span>{" "}
              to achieve your goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
