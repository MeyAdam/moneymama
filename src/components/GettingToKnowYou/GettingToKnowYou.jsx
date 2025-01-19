import React from "react";

const GettingToKnowYou = ({selectedGender, setSelectedGender}) => {
  return (
    <div
      id="getting-to-know-you"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
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
      // selectedGender={selectedGender}
      // setSelectedGender={setSelectedGender}
      />
      <AgeInput
      // currentAge={currentAge}
      // setCurrentAge={setCurrentAge}
      // retiredAge={retiredAge}
      // setRetiredAge={setRetiredAge}
      // lifeExpectancy={lifeExpectancy}
      // setLifeExpectancy={setLifeExpectancy}
      />
      <div className="btns">
        <BtnYellow
          text="Next"
        />
      </div>
    </div>
  );
};

export default GettingToKnowYou;
