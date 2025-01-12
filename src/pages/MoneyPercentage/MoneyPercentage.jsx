import React from "react";
import BtnYellow from "../../components/BtnYellow/BtnYellow";
import MoneyInput from "../../components/MoneyInput/MoneyInput";
import PercentageInput from "../../components/PercentageInput/PercentageInput";

const MoneyPercentage = () => {
  return (
    <>
      <MoneyInput />
      <PercentageInput />
      <BtnYellow text="See Result" />
    </>
  );
};

export default MoneyPercentage;
