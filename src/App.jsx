import React from "react";
import AgeInput from "./components/AgeInput/AgeInput";
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

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <PlanSteps />
      <Gender />
      <AgeInput />
      <MoneyInput />
      <PercentageInput />
      <EstimatedAmt />
      <TotalAccumulated />
      <EmailReport />
      <Footer />
    </>
  );
};

export default App;
