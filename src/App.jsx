import React, { useEffect, useState } from "react";
import AgeInput from "./components/AgeInput/AgeInput";
import BtnOutline from "./components/BtnOutline/BtnOutline";
import BtnYellow from "./components/BtnYellow/BtnYellow";
import Conclusion from "./components/Conclusion/Conclusion";
import EmailReport from "./components/EmailReport/EmailReport";
import ExpectedMonthlyExpense from "./components/ExpectedMonthlyExpense/ExpectedMonthlyExpense";
import Footer from "./components/Footer/Footer";
import Gender from "./components/Gender/Gender";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MoneyInput from "./components/MoneyInput/MoneyInput";
import PlanSteps from "./components/PlanSteps/PlanSteps";
import Recommendations from "./components/Recommendations/Recommendations";

const App = () => {
  const [activeSection, setActiveSection] = useState(
    () => sessionStorage.getItem("activeSection") || "gettingToKnowYou"
  );

  const [theData, setTheData] = useState(() => {
    const storedData = sessionStorage.getItem("theData");
    return storedData
      ? JSON.parse(storedData)
      : {
          selectedGender: null,
          currentAge: 25,
          retiredAge: 55,
          lifeExpectancy: 80,
          currentGrossIncome: 8350,
          currentEPF: 44500,
          currentSavings: 3500,
          averageSavingsInvestment: 3.9,
          expectedMonthlyExpense: 3500,
          adjustedInvestmentGrowthRate: 3.12,
        };
  });
  console.log("theData", theData);

  useEffect(() => {
    sessionStorage.setItem("theData", JSON.stringify(theData));
  }, [theData]);

  useEffect(() => {
    sessionStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <main>
        <Hero
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <PlanSteps activeSection={activeSection} />
        <div style={{ marginTop: "100px" }}>
          <section
            id="gettingToKnowYou"
            style={{
              display: activeSection === "gettingToKnowYou" ? "flex" : "none",
              flexDirection: "column",
              gap: "50px",
              marginBottom: "100px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Step 1: Getting to Know You
            </h2>
            <Gender
              selectedGender={theData.selectedGender}
              setSelectedGender={(gender) =>
                setTheData((prev) => ({ ...prev, selectedGender: gender }))
              }
            />
            <AgeInput
              currentAge={theData.currentAge}
              setCurrentAge={(age) =>
                setTheData((prev) => ({ ...prev, currentAge: age }))
              }
              retiredAge={theData.retiredAge}
              setRetiredAge={(age) =>
                setTheData((prev) => ({ ...prev, retiredAge: age }))
              }
              lifeExpectancy={theData.lifeExpectancy}
              setLifeExpectancy={(life) =>
                setTheData((prev) => ({ ...prev, lifeExpectancy: life }))
              }
            />
            <div className="btns">
              <BtnYellow
                text="Next"
                onClick={() => handleSectionChange("understandingYourFinances")}
              />
            </div>
          </section>

          <section
            id="understandingYourFinances"
            style={{
              display:
                activeSection === "understandingYourFinances" ? "flex" : "none",
              flexDirection: "column",
              gap: "50px",
              marginBottom: "100px",
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
              currentGrossIncome={theData.currentGrossIncome}
              setCurrentGrossIncome={(income) =>
                setTheData((prev) => ({ ...prev, currentGrossIncome: income }))
              }
              currentEPF={theData.currentEPF}
              setCurrentEPF={(epf) =>
                setTheData((prev) => ({ ...prev, currentEPF: epf }))
              }
              currentSavings={theData.currentSavings}
              setCurrentSavings={(savings) =>
                setTheData((prev) => ({ ...prev, currentSavings: savings }))
              }
              averageSavingsInvestment={theData.averageSavingsInvestment}
              setAverageSavingsInvestment={(investment) =>
                setTheData((prev) => ({
                  ...prev,
                  averageSavingsInvestment: investment,
                }))
              }
            />
            <ExpectedMonthlyExpense
              expectedMonthlyExpense={theData.expectedMonthlyExpense}
              setExpectedMonthlyExpense={(expense) =>
                setTheData((prev) => ({
                  ...prev,
                  expectedMonthlyExpense: expense,
                }))
              }
            />
            <div className="btns">
              <BtnOutline
                text="Go Back"
                onClick={() => handleSectionChange("gettingToKnowYou")}
              />
              <BtnYellow
                text="Next: Your Savings & Retirement Plan"
                onClick={() => handleSectionChange("summary")}
              />
            </div>
          </section>

          <section
            id="summary"
            style={{ display: activeSection === "summary" ? "block" : "none" }}
          >
            <div>
              <Conclusion
                retiredAge={theData.retiredAge}
                adjustedInvestmentGrowthRate={
                  theData.adjustedInvestmentGrowthRate
                }
                setAdjustedInvestmentGrowthRate={(rate) =>
                  setTheData((prev) => ({
                    ...prev,
                    adjustedInvestmentGrowthRate: rate,
                  }))
                }
              />
              <Recommendations />
            </div>
            <EmailReport />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
