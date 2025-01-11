import React, { useState } from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./PercentageInput.module.css";

const PercentageInput = () => {
  const [savingsRate, setSavingsRate] = useState(85.38);
  const [preInvestmentReturn, setPreInvestmentReturn] = useState(50);
  const [postInvestmentReturn, setPostInvestmentReturn] = useState(17.56);

  const handleSavingsRateChange = (e) => {
    setSavingsRate(e.target.value);
  };

  const handlePreInvestmentReturnChange = (e) => {
    setPreInvestmentReturn(e.target.value);
  };

  const handlePostInvestmentReturnChange = (e) => {
    setPostInvestmentReturn(e.target.value);
  };

  return (
    <section className={css.sectionPercentageInput}>
      <WrapperWhite className={css.wrapperPercentageInput}>
        <div className={css.wrapperPercentage}>
          <h3>Savings rate</h3>
          <div className={css.wrapperInputValue}>
            <input
              className={css.rangeInput}
              type="range"
              name="savingsRate"
              id=""
              min="0"
              max="100"
              step="0.01"
              value={savingsRate}
              onChange={handleSavingsRateChange}
              style={{
                background: `linear-gradient(to right, var(--yellow) ${savingsRate}%, #F7F8FF ${savingsRate}%)`,
              }}
            />
            <input
              className={css.numberInput}
              type="number"
              name="savingsRate"
              id=""
              min="0"
              max="100"
              step="0.01"
              value={savingsRate}
              onChange={handleSavingsRateChange}
            />
          </div>
        </div>
        <div className={css.wrapperPercentage}>
          <h3>Pre-retirement investment return %</h3>
          <div className={css.wrapperInputValue}>
            <input
              className={css.rangeInput}
              type="range"
              name="preInvestmentReturn"
              id=""
              min="0"
              max="100"
              step="0.01"
              value={preInvestmentReturn}
              onChange={handlePreInvestmentReturnChange}
              style={{
                background: `linear-gradient(to right, var(--yellow) ${preInvestmentReturn}%, #F7F8FF ${preInvestmentReturn}%)`,
              }}
            />
            <input
              className={css.numberInput}
              type="number"
              name="preInvestmentReturn"
              id=""
              min="0"
              max="100"
              step="0.01"
              value={preInvestmentReturn}
              onChange={handlePreInvestmentReturnChange}
            />
          </div>
        </div>
        <div className={css.wrapperPercentage}>
          <h3>Post-retirement Investment return %</h3>
          <div className={css.wrapperInputValue}>
            <input
              className={css.rangeInput}
              type="range"
              name="postInvestmentReturn"
              id=""
              min="0"
              max="100"
              step="0.01"
              value={postInvestmentReturn}
              onChange={handlePostInvestmentReturnChange}
              style={{
                background: `linear-gradient(to right, var(--yellow) ${postInvestmentReturn}%, #F7F8FF ${postInvestmentReturn}%)`,
              }}
            />
            <input
              className={css.numberInput}
              type="number"
              name="postInvestmentReturn"
              id=""
              min="0"
              max="100"
              step="0.01"
              value={postInvestmentReturn}
              onChange={handlePostInvestmentReturnChange}
            />
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default PercentageInput;
