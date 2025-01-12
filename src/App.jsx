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
  console.log("selectedGender", selectedGender);

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
          />
          <MoneyPercentage />
          <Estimation />
        </Sections>
        <TotalAccumulatedDetails />
        <EmailReport />
      </main>
      <Footer />
    </>
  );
};

export default App;
