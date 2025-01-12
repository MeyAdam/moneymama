import React from "react";
import imgMen from "../../assets/imgMen.png";
import imgWomen from "../../assets/imgWomen.png";
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
            <img src={imgMen} alt="Man" />
            <p>Man</p>
          </div>
          <div
            className={`${css.gender} ${
              selectedGender === "Woman" ? css.selected : ""
            }`}
            onClick={() => handleSelectedGender("Woman")}
          >
            <img src={imgWomen} alt="Woman" />
            <p>Woman</p>
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default Gender;
