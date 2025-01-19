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
import Gender from "./components/Gender/Gender";
import AgeInput from "./components/AgeInput/AgeInput";
import BtnYellow from "./components/BtnYellow/BtnYellow";
import MoneyInput from "./components/MoneyInput/MoneyInput";
import PercentageInput from "./components/PercentageInput/PercentageInput";
import EstimatedAmt from "./components/EstimatedAmt/EstimatedAmt";
import TotalAccumulated from "./components/TotalAccumulated/TotalAccumulated";
import BtnOutline from "./components/BtnOutline/BtnOutline";
import ExpectedMonthlyExpense from "./components/ExpectedMonthlyExpense/ExpectedMonthlyExpense";
import Conclusion from "./components/Conclusion/Conclusion";
import Recommendations from "./components/Recommendations/Recommendations";
import css from "./App.module.css";

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
        <div style={{ margin: "100px 0" }}>
          <div
            id="getting-to-know-you"
            style={{ display: "flex", flexDirection: "column", gap: "50px" }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Step 1: Getting to know you
            </h2>
            <Gender
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
            <AgeInput
              currentAge={currentAge}
              setCurrentAge={setCurrentAge}
              retiredAge={retiredAge}
              setRetiredAge={setRetiredAge}
              lifeExpectancy={lifeExpectancy}
              setLifeExpectancy={setLifeExpectancy}
            />
            <div className="btns">
              <BtnYellow text="Next" />
            </div>
          </div>
          <div
            style={{ display: "none", flexDirection: "column", gap: "50px" }}
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
              expectedMonthlyExpense={expectedMonthlyExpense}
              setExpectedMonthlyExpense={setExpectedMonthlyExpense}
              currentGrossIncome={currentGrossIncome}
              setCurrentGrossIncome={setCurrentGrossIncome}
              currentEPF={currentEPF}
              setCurrentEPF={setCurrentEPF}
              currentSavings={currentSavings}
              setCurrentSavings={setCurrentSavings}
            />
            <ExpectedMonthlyExpense />
            {/* <PercentageInput
            savingsRate={savingsRate}
            setSavingsRate={setSavingsRate}
            preInvestmentReturn={preInvestmentReturn}
            setPreInvestmentReturn={setPreInvestmentReturn}
            postInvestmentReturn={postInvestmentReturn}
            setPostInvestmentReturn={setPostInvestmentReturn}
          /> */}
            <div className="btns">
              <BtnOutline text="Go Back" />
              <BtnYellow text="Next: Your Savings & Retirement Plan" />
            </div>
          </div>
          <div style={{ display: "none" }}>
            <div>
              <Conclusion />
              {/* <EstimatedAmt
            retirementGoal={retirementGoal}
            setRetirementGoal={setRetirementGoal}
          />
          <TotalAccumulated
            retiredAge={retiredAge}
            projectedSaving={projectedSaving}
            shortAmt={shortAmt}
            saveMonthly={saveMonthly}
          />
          <BtnYellow text="Recalculate" />
          <TotalAccumulatedDetails
            retirementGoal={retirementGoal}
            currentSavings={currentSavings}
            projectedSaving={projectedSaving}
            shortAmt={shortAmt}
          /> */}
              <Recommendations />
            </div>
            <EmailReport />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
