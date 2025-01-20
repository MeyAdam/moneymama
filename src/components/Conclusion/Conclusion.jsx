import React, { useState } from "react";
import ModalAdjustedInvestmentGrowthRate from "../ModalAdjustedInvestmentGrowthRate/ModalAdjustedInvestmentGrowthRate";
import css from "./Conclusion.module.css";

const Conclusion = ({
  retiredAge,
  adjustedInvestmentGrowthRate,
  setAdjustedInvestmentGrowthRate,
  retirementGoal,
  monthlySaving,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper function to format numbers with thousand commas
  const formatNumber = (number) => {
    if (number === "" || isNaN(number)) return "";
    return parseFloat(number).toLocaleString("en-US");
  };

  const handleAdjustedInvestmentGrowthRateChange = (e) => {
    setAdjustedInvestmentGrowthRate(Number(e.target.value));
  };

  const handleAdjustedInvestmentGrowthRateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={css.sectionConclusion}>
      <div className={css.wrapperConclusions}>
        <div className={css.wrapper1}>
          <div className={css.wrapperRetirementGoal}>
            <p className={css.text}>Your retirement goal</p>
            <p className={css.amount}>RM{formatNumber(retirementGoal)}</p>
            <p className={css.text}>to retire at {retiredAge} years old</p>
          </div>
          <div className={css.wrapperMonthlySave}>
            <p className={css.text}>You need to save</p>
            <p className={css.amount}>RM{formatNumber(monthlySaving)}/month</p>
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
              to achieve your goal.{" "}
              <span
                className={css.circleQuestion}
                onClick={handleAdjustedInvestmentGrowthRateClick}
              >
                ?
              </span>
            </p>
          </div>
          <ModalAdjustedInvestmentGrowthRate
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
