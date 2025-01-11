import React from "react";
import AgeInput from "./components/AgeInput/AgeInput";
import BtnYellow from "./components/BtnYellow/BtnYellow";
import EmailReport from "./components/EmailReport/EmailReport";
import EstimatedAmt from "./components/EstimatedAmt/EstimatedAmt";
import Footer from "./components/Footer/Footer";
import Gender from "./components/Gender/Gender";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MoneyInput from "./components/MoneyInput/MoneyInput";
import PercentageInput from "./components/PercentageInput/PercentageInput";
import PlanSteps from "./components/PlanSteps/PlanSteps";
import TotalAccumulated from "./components/TotalAccumulated/TotalAccumulated";
import TotalAccumulatedDetails from "./components/TotalAccumulatedDetails/TotalAccumulatedDetails";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <PlanSteps />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px 0",
          gap: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <Gender />
          <AgeInput />
          <BtnYellow text="Next" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <MoneyInput />
          <PercentageInput />
          <BtnYellow text="See Result" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <EstimatedAmt />
          <TotalAccumulated />
          <BtnYellow text="Recalculate" />
        </div>
      </div>
      <TotalAccumulatedDetails />
      <EmailReport />
      <Footer />
    </>
  );
};

export default App;
