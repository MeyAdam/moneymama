import React from "react";
import BtnYellow from "../BtnYellow/BtnYellow";
import css from "./EmailReport.module.css";

const EmailReport = () => {
  return (
    <section className={css.sectionEmailReport}>
      <div className={css.wrapperEmailReport}>
        <h2>Get your report direct to your inbox</h2>
        <div className={css.wrapperEmail}>
          <input type="email" placeholder="Enter email" className={css.inputEmail} />
          <BtnYellow text="Get my report" />
        </div>
      </div>
    </section>
  );
};

export default EmailReport;
