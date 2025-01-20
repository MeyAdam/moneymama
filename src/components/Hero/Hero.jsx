import React from "react";
import BtnYellow from "../BtnYellow/BtnYellow";
import css from "./Hero.module.css";

const Hero = ({ activeSection, setActiveSection }) => {
  const handleStartNowClick = () => {
    setActiveSection("gettingToKnowYou");
  };

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
        {activeSection !== "gettingToKnowYou" ? (
          <BtnYellow text="Start Now" onClick={handleStartNowClick} />
        ) : (
          <BtnYellow text="Start Now" theLink="#gettingToKnowYou" />
        )}
      </div>
    </section>
  );
};

export default Hero;
