import React from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./ExpectedMonthlyExpense.module.css";

const ExpectedMonthlyExpense = ({
  expectedMonthlyExpense,
  setExpectedMonthlyExpense,
}) => {
  // format the number with thousand commas
  const formatNumber = (number) => {
    if (number === "" || isNaN(number)) return "";
    return parseFloat(number).toLocaleString("en-US");
  };

  // parse the input value (removing commas)
  const parseNumber = (value) => {
    return value.replace(/,/g, "");
  };

  // Handler for the input change
  const handleExpectedMonthlyExpenseChange = (e) => {
    const value = e.target.value;
    const numericValue = parseNumber(value);
    if (!isNaN(numericValue)) {
      setExpectedMonthlyExpense(parseFloat(numericValue));
    }
  };

  return (
    <section className={css.sectionExpectedMonthlyExpense}>
      <WrapperWhite className={css.wrapperExpectedMonthlyExpense}>
        <div className={css.wrapperInput}>
          <div>
            <h3>What is Your Expected Monthly Expense in Retirement?</h3>
            <p
              style={{
                color: "var(--grey02)",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Based on today's value, estimate how much you'll need per month
              for living costs, including housing, food, healthcare, and
              lifestyle expenses.
            </p>
          </div>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="text"
              name="expectedMonthlyExpense"
              value={formatNumber(expectedMonthlyExpense)} // Display
              onChange={handleExpectedMonthlyExpenseChange}
            />
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default ExpectedMonthlyExpense;
