import classNames from "classnames";
import React from "react";
import { FaCheck } from "react-icons/fa";
import css from "./PlanSteps.module.css";

const steps = [
  { id: "gettingToKnowYou", label: "1" },
  { id: "understandingYourFinances", label: "2" },
  { id: "summary", label: <FaCheck /> },
];

const PlanSteps = ({ activeSection }) => {
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
          {steps.map((step, index) => {
            // Check if the step is active or a previous step
            const isActive =
              steps.findIndex((s) => s.id === activeSection) >= index;

            return (
              <div
                key={step.id}
                className={classNames(css.step, {
                  [css.active]: isActive,
                })}
              >
                <p>{step.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanSteps;
