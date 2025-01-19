import React from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./ExpectedMonthlyExpense.module.css";

const ExpectedMonthlyExpense = ({
  expectedMonthlyExpense,
  setExpectedMonthlyExpense,
}) => {
  const handleExpectedMonthlyExpenseChange = (e) => {
    setExpectedMonthlyExpense(Number(e.target.value));
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
              type="number"
              name="expectedMonthlyExpense"
              min="0"
              value={expectedMonthlyExpense}
              onChange={handleExpectedMonthlyExpenseChange}
            />
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default ExpectedMonthlyExpense;
