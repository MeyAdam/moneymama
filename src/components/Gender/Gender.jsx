import React from "react";
import imgMen from "../../assets/imgMen.png";
import imgWomen from "../../assets/imgWomen.png";
import WrapperWhite from "../WrapperWhite/WrapperWhite";
import css from "./Gender.module.css";

const Gender = () => {
  return (
    <section className={css.sectionGender}>
      <WrapperWhite className={css.wrapperGender}>
        <h2>What's your gender?</h2>
        <div className={css.wrapperGenderChoice}>
          <div className={css.gender}>
            <img src={imgMen} alt="Men" />
            <p>Men</p>
          </div>
          <div className={css.gender}>
            <img src={imgWomen} alt="Women" />
            <p>Women</p>
          </div>
        </div>
      </WrapperWhite>
    </section>
  );
};

export default Gender;
