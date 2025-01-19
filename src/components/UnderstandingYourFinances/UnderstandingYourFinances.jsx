import React from "react";

const UnderstandingYourFinances = () => {
  return (
    <div
      id="understanding-your-finances"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "500",
        }}
      >
        Step 2: Understanding Your Finances
      </h2>
      <MoneyInput
      // expectedMonthlyExpense={expectedMonthlyExpense}
      // setExpectedMonthlyExpense={setExpectedMonthlyExpense}
      // currentGrossIncome={currentGrossIncome}
      // setCurrentGrossIncome={setCurrentGrossIncome}
      // currentEPF={currentEPF}
      // setCurrentEPF={setCurrentEPF}
      // currentSavings={currentSavings}
      // setCurrentSavings={setCurrentSavings}
      />
      <ExpectedMonthlyExpense />
      <div className="btns">
        <BtnOutline text="Go Back" />
        <BtnYellow text="Next: Your Savings & Retirement Plan" />
      </div>
    </div>
  );
};

export default UnderstandingYourFinances;
