import React from "react";
import BtnYellow from "../BtnYellow/BtnYellow";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.sectionHero}>
      <div className={css.wrapperHero}>
        <h1>
          Calculate how much you need to{" "}
          <span style={{ color: "var(--salmonRed)", fontStyle: "italic" }}>
            retire
          </span>
        </h1>
        <p className={css.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <BtnYellow text="Start Now" />
      </div>
    </section>
  );
};

export default Hero;
