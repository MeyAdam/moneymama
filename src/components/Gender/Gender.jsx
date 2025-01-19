import React from "react";
import imgMan from "../../assets/man.png";
import imgWoman from "../../assets/woman.png";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./Gender.module.css";

const Gender = ({ selectedGender, setSelectedGender }) => {
  const handleSelectedGender = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <section className={css.sectionGender}>
      <WrapperWhite className={css.wrapperGender}>
        <h3>What's your gender?</h3>
        <div className={css.wrapperGenderChoice}>
          <div
            className={`${css.gender} ${
              selectedGender === "Man" ? css.selected : ""
            }`}
            onClick={() => handleSelectedGender("Man")}
          >
            <img src={imgMan} alt="Man" />
            <p>Man</p>
          </div>
          <div
            className={`${css.gender} ${
              selectedGender === "Woman" ? css.selected : ""
            }`}
            onClick={() => handleSelectedGender("Woman")}
          >
            <img src={imgWoman} alt="Woman" />
            <p>Woman</p>
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default Gender;
