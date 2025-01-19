import React from "react";
import AgeInput from "../../components/AgeInput/AgeInput";
import BtnYellow from "../../components/BtnYellow/BtnYellow";
import Gender from "../../components/Gender/Gender";

const Personal = ({
  currentAge,
  setCurrentAge,
  retiredAge,
  setRetiredAge,
  lifeExpectancy,
  setLifeExpectancy,
}) => {
  return (
    <>
      <AgeInput
        currentAge={currentAge}
        setCurrentAge={setCurrentAge}
        retiredAge={retiredAge}
        setRetiredAge={setRetiredAge}
        lifeExpectancy={lifeExpectancy}
        setLifeExpectancy={setLifeExpectancy}
      />
      <BtnYellow text="Next" />
    </>
  );
};

export default Personal;
