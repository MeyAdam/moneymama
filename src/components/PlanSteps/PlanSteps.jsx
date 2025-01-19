import classNames from "classnames";
import React from "react";
import { FaCheck } from "react-icons/fa";
import css from "./PlanSteps.module.css";

const PlanSteps = () => {
  return (
    <section className={css.sectionPlanSteps}>
      <div className={css.wrapperPlanSteps}>
        <div className={css.heading}>
          <h2>Plan Your Retirement Savings Today</h2>
          <p className={css.desc}>
            This tool will help you estimate how much you need to retire just in
            2 minutes!
          </p>
        </div>
        <div className={css.wrapperSteps}>
          <div className={classNames(css.step, css.active)}>
            <p>1</p>
          </div>
          <div className={css.step}>
            <p>2</p>
          </div>
          <div className={css.step}>
            <FaCheck />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSteps;
