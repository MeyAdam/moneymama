import React, { useState } from "react";
import EmailReport from "./components/EmailReport/EmailReport";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PlanSteps from "./components/PlanSteps/PlanSteps";
import Sections from "./components/Sections/Sections";
import TotalAccumulatedDetails from "./components/TotalAccumulatedDetails/TotalAccumulatedDetails";
import Estimation from "./pages/Estimation/Estimation";
import MoneyPercentage from "./pages/MoneyPercentage/MoneyPercentage";
import Personal from "./pages/Personal/Personal";

const App = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [currentAge, setCurrentAge] = useState(25);
  const [retiredAge, setRetiredAge] = useState(55);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [expectedMonthlyExpense, setExpectedMonthlyExpense] = useState(3500);
  const [currentGrossIncome, setCurrentGrossIncome] = useState(8350);
  const [currentEPF, setCurrentEPF] = useState(44500);
  const [currentSavings, setCurrentSavings] = useState(3500);
  const [savingsRate, setSavingsRate] = useState(85.38);
  const [preInvestmentReturn, setPreInvestmentReturn] = useState(50);
  const [postInvestmentReturn, setPostInvestmentReturn] = useState(17.56);
  const [retirementGoal, setRetirementGoal] = useState(1600001);
  const [projectedSaving, setProjectedSaving] = useState(990700);
  const [shortAmt, setShortAmt] = useState(250300);
  const [saveMonthly, setSaveMonthly] = useState(1200);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PlanSteps />
        <Sections>
          <Personal
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            currentAge={currentAge}
            setCurrentAge={setCurrentAge}
            retiredAge={retiredAge}
            setRetiredAge={setRetiredAge}
            lifeExpectancy={lifeExpectancy}
            setLifeExpectancy={setLifeExpectancy}
          />
          <MoneyPercentage
            expectedMonthlyExpense={expectedMonthlyExpense}
            setExpectedMonthlyExpense={setExpectedMonthlyExpense}
            currentGrossIncome={currentGrossIncome}
            setCurrentGrossIncome={setCurrentGrossIncome}
            currentEPF={currentEPF}
            setCurrentEPF={setCurrentEPF}
            currentSavings={currentSavings}
            setCurrentSavings={setCurrentSavings}
            savingsRate={savingsRate}
            setSavingsRate={setSavingsRate}
            preInvestmentReturn={preInvestmentReturn}
            setPreInvestmentReturn={setPreInvestmentReturn}
            postInvestmentReturn={postInvestmentReturn}
            setPostInvestmentReturn={setPostInvestmentReturn}
          />
          <Estimation
            retirementGoal={retirementGoal}
            setRetirementGoal={setRetirementGoal}
            retiredAge={retiredAge}
            projectedSaving={projectedSaving}
            shortAmt={shortAmt}
            saveMonthly={saveMonthly}
          />
        </Sections>
        <TotalAccumulatedDetails
          retirementGoal={retirementGoal}
          currentSavings={currentSavings}
          projectedSaving={projectedSaving}
          shortAmt={shortAmt}
        />
        <EmailReport />
      </main>
      <Footer />
    </>
  );
};

export default App;
