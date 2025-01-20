import React, { useState } from "react";
import ModalAverageSavingsInvestment from "../ModalAverageSavingsInvestment/ModalAverageSavingsInvestment";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers for input changes with formatting
  const handleFormattedChange = (setter) => (e) => {
    const value = e.target.value.replace(/,/g, ""); // remove commas
    const numericValue = parseFloat(value) || 0; // convert to number to insert into sessionStorage
    setter(numericValue); // update
  };

  const formatNumber = (number) => number.toLocaleString("en-US");

  const handleAverageSavingsInvestment = (e) => {
    setAverageSavingsInvestment(Number(e.target.value));
  };

  const handleAverageSavingsInvestmentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
              type="text"
              name="currentGrossIncome"
              value={formatNumber(currentGrossIncome)}
              onChange={handleFormattedChange(setCurrentGrossIncome)}
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
              Your total amount saved in your EPF account. Check{" "}
              <a
                href="https://iakaun.kwsp.gov.my/portal/member/login"
                style={{ color: "var(--blue)", textDecoration: "underline" }}
              >
                here
              </a>
              .
            </p>
          </div>
          <div className={css.wrapperInputGroup}>
            <p className={css.inputGroupText}>RM</p>
            <input
              className={css.numberInput}
              type="text"
              name="currentEPF"
              value={formatNumber(currentEPF)}
              onChange={handleFormattedChange(setCurrentEPF)}
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
              type="text"
              name="currentSavings"
              value={formatNumber(currentSavings)}
              onChange={handleFormattedChange(setCurrentSavings)}
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
            time{" "}
            <span
              className={css.circleQuestion}
              onClick={handleAverageSavingsInvestmentClick}
            >
              ?
            </span>
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
      <ModalAverageSavingsInvestment
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default MoneyInput;
