import React from "react";
import css from "./Recommendations.module.css";
import BtnYellow from "../BtnYellow/BtnYellow";
import imgLicensedAdvisor from "../../assets/licensed-advisor.jpg";
import classNames from "classnames";

const Recommendations = () => {
  return (
    <section className={css.sectionRecommendations}>
      <div className={css.wrapperRecommendations}>
        <h2 style={{ textAlign: "center" }}>Recommendations</h2>
        <div className={css.boxRecommendations}>
          <div className={css.recommendation}>
            <div className={css.text}>
              <p className={css.title}>Maybank Retail Money Market-i Fund</p>
              <ul className={css.desc}>
                <li>
                  Shariah-compliant fund with higher returns than traditional
                  bank deposits.
                </li>
                <li>High liquidity - easily access funds anytime.</li>
                <li>No fixed tenure - suitable for short-term goals.</li>
                <li>Convenient for investors who need quick access to cash.</li>
              </ul>
              <p className={css.risk}>Risk Level: Medium</p>
            </div>

            <div className={css.percentage}>
              <p className={css.number}>3.7%</p>
              <p className={css.percentageText}>
                Average investment returns
                <br />
                per annum (based on past year data)
              </p>
              <BtnYellow text="Learn More" />
            </div>
          </div>

          <div className={css.recommendation}>
            <div className={css.text}>
              <p className={css.title}>Boost Bank Special Jar</p>
              <ul className={css.desc}>
                <li>Earn daily interest on deposited funds</li>
                <li>Available only within the campaign period</li>
              </ul>
              <p className={css.risk}>Risk Level: Low</p>
            </div>

            <div className={css.percentage}>
              <p className={css.number}>2.55%</p>
              <p className={css.percentageText}>
                Average investment returns
                <br />
                per annum (based on past year data)
              </p>
              <BtnYellow text="Learn More" />
            </div>
          </div>
          <div className={css.recommendation}>
            <div className={classNames(css.text, css.licensedAdvisorText)}>
              <p className={css.title}>Prefer to talk to a licensed advisor?</p>
              <p className={css.desc}>
                Not sure which option is right for you? Speak with a licensed
                advisor who can guide you through your next steps and tailor a
                plan just for you.
              </p>
              <BtnYellow text="Schedule a free consultation" />
            </div>

            <img src={imgLicensedAdvisor} alt="licensed advisor" className={css.licensedAdvisor} />
            {/* <div >
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
