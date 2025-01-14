import React from "react";
import BtnYellow from "../../components/BtnYellow/BtnYellow";
import EstimatedAmt from "../../components/EstimatedAmt/EstimatedAmt";
import TotalAccumulated from "../../components/TotalAccumulated/TotalAccumulated";

const Estimation = ({
  retirementGoal,
  setRetirementGoal,
  retiredAge,
  projectedSaving,
  shortAmt,
  saveMonthly,
}) => {
  return (
    <>
      <EstimatedAmt
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
    </>
  );
};

export default Estimation;
