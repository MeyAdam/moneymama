import React, { useState } from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./MoneyInput.module.css";

const MoneyInput = () => {
  const [expectedMonthlyExpense, setExpectedMonthlyExpense] = useState(3500);
  const [currentGrossIncome, setCurrentGrossIncome] = useState(8350);
  const [currentEPF, setCurrentEPF] = useState(44500);
  const [currentSavings, setCurrentSavings] = useState(3500);

  const handleExpectedMonthlyExpenseChange = (e) => {
    setExpectedMonthlyExpense(Number(e.target.value));
  };

  const handleCurrentGrossIncomeChange = (e) => {
    setCurrentGrossIncome(Number(e.target.value));
  };

  const handleCurrentEPFChange = (e) => {
    setCurrentEPF(Number(e.target.value));
  };

  const handleCurrentSavingsChange = (e) => {
    setCurrentSavings(Number(e.target.value));
  };

  return (
    <section className={css.sectionMoneyInput}>
      <WrapperWhite className={css.wrapperMoneyInput}>
        <div className={css.wrapperMoney}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>Your expected monthly expense upon retirement</h3>
            <p style={{ color: "var(--grey02)" }}>Based on today's value</p>
          </div>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="number"
              name="expectedMonthlyExpense"
              min="0"
              value={expectedMonthlyExpense}
              onChange={handleExpectedMonthlyExpenseChange}
            />
          </div>
        </div>

        <div className={css.wrapperMoney}>
          <h3>Current monthly gross income</h3>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="number"
              name="currentGrossIncome"
              min="0"
              value={currentGrossIncome}
              onChange={handleCurrentGrossIncomeChange}
            />
          </div>
        </div>

        <div className={css.wrapperMoney}>
          <h3>Current EPF balance</h3>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="number"
              name="currentEPF"
              min="0"
              value={currentEPF}
              onChange={handleCurrentEPFChange}
            />
          </div>
        </div>

        <div className={css.wrapperMoney}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>Current savings</h3>
            <p style={{ color: "var(--grey02)" }}>
              (Fixed deposits, PRS, stocks, gold, cryptocurrencies, rental
              income, etc)
            </p>
          </div>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="number"
              name="currentSavings"
              min="0"
              value={currentSavings}
              onChange={handleCurrentSavingsChange}
            />
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default MoneyInput;
