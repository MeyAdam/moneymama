import React from "react";
import BtnYellow from "../../components/BtnYellow/BtnYellow";
import MoneyInput from "../../components/MoneyInput/MoneyInput";
import PercentageInput from "../../components/PercentageInput/PercentageInput";

const MoneyPercentage = ({
  expectedMonthlyExpense,
  setExpectedMonthlyExpense,
  currentGrossIncome,
  setCurrentGrossIncome,
  currentEPF,
  setCurrentEPF,
  currentSavings,
  setCurrentSavings,
  savingsRate,
  setSavingsRate,
  preInvestmentReturn,
  setPreInvestmentReturn,
  postInvestmentReturn,
  setPostInvestmentReturn,
}) => {
  return (
    <>
      <MoneyInput
        expectedMonthlyExpense={expectedMonthlyExpense}
        setExpectedMonthlyExpense={setExpectedMonthlyExpense}
        currentGrossIncome={currentGrossIncome}
        setCurrentGrossIncome={setCurrentGrossIncome}
        currentEPF={currentEPF}
        setCurrentEPF={setCurrentEPF}
        currentSavings={currentSavings}
        setCurrentSavings={setCurrentSavings}
      />
      <PercentageInput
        savingsRate={savingsRate}
        setSavingsRate={setSavingsRate}
        preInvestmentReturn={preInvestmentReturn}
        setPreInvestmentReturn={setPreInvestmentReturn}
        postInvestmentReturn={postInvestmentReturn}
        setPostInvestmentReturn={setPostInvestmentReturn}
      />
      <BtnYellow text="See Result" />
    </>
  );
};

export default MoneyPercentage;
