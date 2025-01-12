import React from "react";
import BtnYellow from "../../components/BtnYellow/BtnYellow";
import EstimatedAmt from "../../components/EstimatedAmt/EstimatedAmt";
import TotalAccumulated from "../../components/TotalAccumulated/TotalAccumulated";

const Estimation = () => {
  return (
    <>
      <EstimatedAmt />
      <TotalAccumulated />
      <BtnYellow text="Recalculate" />
    </>
  );
};

export default Estimation;
