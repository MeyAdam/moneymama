import React from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./MoneyInput.module.css";

const MoneyInput = ({
  currentGrossIncome,
  setCurrentGrossIncome,
  currentEPF,
  setCurrentEPF,
  currentSavings,
  setCurrentSavings,
  averageSavingsInvestment,
  setAverageSavingsInvestment,
}) => {
  // Handler functions for input changes
  const handleCurrentGrossIncomeChange = (e) => {
    setCurrentGrossIncome(Number(e.target.value));
  };

  const handleCurrentEPFChange = (e) => {
    setCurrentEPF(Number(e.target.value));
  };

  const handleCurrentSavingsChange = (e) => {
    setCurrentSavings(Number(e.target.value));
  };
  const handleAverageSavingsInvestment = (e) => {
    setAverageSavingsInvestment(Number(e.target.value));
  };

  return (
    <section className={css.sectionMoneyInput}>
      <WrapperWhite className={css.wrapperMoneyInput}>
        <div className={css.wrapperMoney}>
          <div>
            <h3>Current monthly gross income</h3>
            <p
              style={{
                color: "var(--grey02)",
                fontWeight: "500",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Your total monthly income before deductions like tax and EPF
            </p>
          </div>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="number"
              name="currentGrossIncome"
              min="0"
              step={0.01}
              value={currentGrossIncome}
              onChange={handleCurrentGrossIncomeChange}
            />
          </div>
        </div>

        <div className={css.wrapperMoney}>
          <div>
            <h3>Current EPF balance</h3>
            <p
              style={{
                color: "var(--grey02)",
                fontWeight: "500",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Your total amount saved in your EPF account. Check here.
            </p>
          </div>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="number"
              name="currentEPF"
              min="0"
              step={0.01}
              value={currentEPF}
              onChange={handleCurrentEPFChange}
            />
          </div>
        </div>

        <div className={css.wrapperMoney}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>Current Savings & Investments</h3>
            <p style={{ color: "var(--grey02)", fontSize: "14px" }}>
              This includes cash savings, fixed deposits, cryptocurrency,
              stocks, and other investments (excluding EPF)
            </p>
          </div>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="number"
              name="currentSavings"
              min="0"
              step={0.01}
              value={currentSavings}
              onChange={handleCurrentSavingsChange}
            />
          </div>
        </div>

        <div className={css.wrapperMoney}>
          <h3>Average Savings & Investments Growth Rate</h3>
          <p
            style={{
              color: "var(--grey02)",
              fontWeight: "500",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            The percentage increase of your total savings and investments over
            time <span className={css.circleQuestion}>?</span>
          </p>
          <div className={css.wrapperInputValue}>
            <input
              className={css.rangeInput}
              type="range"
              name="averageSavingsInvestment"
              id=""
              min="0"
              max="100"
              step={0.01}
              value={averageSavingsInvestment}
              onChange={handleAverageSavingsInvestment}
              style={{
                background: `linear-gradient(to right, var(--yellow) ${averageSavingsInvestment}%, #F7F8FF ${averageSavingsInvestment}%)`,
              }}
            />
            <input
              className={css.rangeNumberInput}
              type="number"
              name="averageSavingsInvestment"
              id=""
              min="0"
              max="100"
              step={0.01}
              value={averageSavingsInvestment}
              onChange={handleAverageSavingsInvestment}
            />
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default MoneyInput;
