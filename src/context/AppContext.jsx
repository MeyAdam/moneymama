// context/AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context to store the user's data
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    gender: null,
    currentAge: null,
    retiredAge: null,
    lifeExpectancy: null,
    expectedMonthlyExpense: null,
    currentGrossIncome: null,
    currentEPF: null,
    currentSavings: null,
    savingsRate: null,
    preInvestmentReturn: null,
    postInvestmentReturn: null,
    retirementGoal: null,
    estimatedSaving: null,
    shortAmt: null,
    monthlyNeeded: null,
    investmentGrowthRate: null,
  });

  // Function to update the app data
  const updateAppData = (newData) => {
    setAppData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <AppContext.Provider value={{ appData, updateAppData }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useAppData = () => useContext(AppContext);
