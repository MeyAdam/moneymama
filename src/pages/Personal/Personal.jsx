import React from "react";
import AgeInput from "../../components/AgeInput/AgeInput";
import BtnYellow from "../../components/BtnYellow/BtnYellow";
import Gender from "../../components/Gender/Gender";

const Personal = ({ selectedGender, setSelectedGender }) => {
  return (
    <>
      <Gender
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
      />
      <AgeInput />
      <BtnYellow text="Next" />
    </>
  );
};

export default Personal;
