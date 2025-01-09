import React from "react";
import css from "./PlanSteps.module.css";

const PlanSteps = () => {
  return (
    <section className={css.sectionPlanSteps}>
      <div className={css.wrapperPlanSteps}>
        <div className={css.heading}>
          <h2>Plan Your Retirement Savings Today</h2>
          <p>
            This tool will help you estimate how much you need to retire just in
            2 minutes!
          </p>
        </div>
        <div>steps</div>
      </div>
    </section>
  );
};

export default PlanSteps;
