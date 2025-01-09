import React, { useState } from "react";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./AgeInput.module.css";

const AgeInput = () => {
  const [currentAge, setCurrentAge] = useState(25);
  const [retiredAge, setRetiredAge] = useState(55);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);

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
          <p>Your current age</p>
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
          <p>Age you would like to retire at</p>
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
          <p>Life expectancy</p>
          <p style={{ color: "var(--grey02)" }}>
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
