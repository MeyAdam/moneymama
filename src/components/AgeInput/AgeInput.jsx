import React, { useState } from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./AgeInput.module.css";

const AgeInput = ({
  currentAge,
  setCurrentAge,
  retiredAge,
  setRetiredAge,
  lifeExpectancy,
  setLifeExpectancy,
}) => {
  const handleAgeChange = (e) => {
    setCurrentAge(Number(e.target.value));
  };
  const handleRetiredAgeChange = (e) => {
    setRetiredAge(Number(e.target.value));
  };
  const handleLifeExpectancyChange = (e) => {
    setLifeExpectancy(Number(e.target.value));
  };

  return (
    <section className={css.sectionAgeInput}>
      <WrapperWhite className={css.wrapperAgeInput}>
        <div className={css.wrapperAges}>
          <h3>Your current age</h3>
          <div className={css.wrapperInputValue}>
            <input
              className={css.rangeInput}
              type="range"
              name="currentAge"
              id=""
              min="0"
              max="100"
              value={currentAge}
              onChange={handleAgeChange}
              style={{
                background: `linear-gradient(to right, var(--yellow) ${currentAge}%, #F7F8FF ${currentAge}%)`,
              }}
            />
            <input
              className={css.numberInput}
              type="number"
              name="currentAge"
              id=""
              min="0"
              max="100"
              value={currentAge}
              onChange={handleAgeChange}
            />
          </div>
        </div>
        <div className={css.wrapperAges}>
          <h3>Age you would like to retire at</h3>
          <div className={css.wrapperInputValue}>
            <input
              className={css.rangeInput}
              type="range"
              name="retiredAge"
              id=""
              min="0"
              max="100"
              value={retiredAge}
              onChange={handleRetiredAgeChange}
              style={{
                background: `linear-gradient(to right, var(--yellow) ${retiredAge}%, #F7F8FF ${retiredAge}%)`,
              }}
            />
            <input
              className={css.numberInput}
              type="number"
              name="retiredAge"
              id=""
              min="0"
              max="100"
              value={retiredAge}
              onChange={handleRetiredAgeChange}
            />
          </div>
        </div>
        <div className={css.wrapperAges}>
          <h3>Life expectancy</h3>
          <p style={{ color: "var(--grey02)", fontWeight: "500" }}>
            Male: 73 years old , Female: 77.8 years (data extracted from DOSM)
          </p>
          <div className={css.wrapperInputValue}>
            <input
              className={css.rangeInput}
              type="range"
              name="lifeExpectancy"
              id=""
              min="0"
              max="100"
              value={lifeExpectancy}
              onChange={handleLifeExpectancyChange}
              style={{
                background: `linear-gradient(to right, var(--yellow) ${lifeExpectancy}%, #F7F8FF ${lifeExpectancy}%)`,
              }}
            />
            <input
              className={css.numberInput}
              type="number"
              name="lifeExpectancy"
              id=""
              min="0"
              max="100"
              value={lifeExpectancy}
              onChange={handleLifeExpectancyChange}
            />
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default AgeInput;
