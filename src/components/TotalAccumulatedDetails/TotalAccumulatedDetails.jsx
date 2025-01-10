import classNames from "classnames";
import React from "react";
import css from "./TotalAccumulatedDetails.module.css";

const TotalAccumulatedDetails = () => {
  return (
    <section className={css.sectionTotalAccumulatedDetails}>
      <div className={css.wrapperTotalAccumulatedDetails}>
        <div className={css.wrapperTotalAccumulated}>
          <div className={css.wrapperTitle}>
            <p>Total accumulated</p>
            <div className={css.wrapperGoal}>
              <p style={{ color: "var(--grey01)" }}>Retirement Goal</p>
              <p>RM1,600,000</p>
            </div>
          </div>
        </div>

        <div className={css.progress}>
          <div
            className={classNames(css.bar, css.blueBar)}
            style={{ width: "25%", backgroundColor: "var(--blue)" }}
          ></div>
          <div
            className={classNames(css.bar, css.yellowBar)}
            style={{ width: "25%", backgroundColor: "var(--yellow)" }}
          ></div>
          <div
            className={classNames(css.bar, css.redBar)}
            style={{ width: "50%", backgroundColor: "var(--red)" }}
          ></div>
        </div>

        <div className={css.wrapperDetails}>
          <div className={css.boxDetail}>
            <div className={css.detailTitle}>
              <div
                className={classNames(css.circle, css.blueCircle)}
                style={{ backgroundColor: "var(--blue)" }}
              ></div>
              <p>Current Savings</p>
            </div>
            <p>RM80,000</p>
          </div>

          <div className={css.boxDetail}>
            <div className={css.detailTitle}>
              <div
                className={classNames(css.circle, css.yellowCircle)}
                style={{ backgroundColor: "var(--yellow)" }}
              ></div>
              <p>Projected Savings</p>
            </div>
            <p>RM990,700</p>
          </div>

          <div className={css.boxDetail}>
            <div className={css.detailTitle}>
              <div
                className={classNames(css.circle, css.redCircle)}
                style={{ backgroundColor: "var(--red)" }}
              ></div>
              <p>Shortage</p>
            </div>
            <p>RM250,300</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalAccumulatedDetails;
