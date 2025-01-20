import React from "react";
import { IoClose } from "react-icons/io5";
import css from "./ModalAverageSavingsInvestment.module.css";

const ModalAverageSavingsInvestment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          <IoClose />
        </button>
        <p style={{ fontWeight: "600" }}>
          This is how much your savings and investments increase on average each
          year. If you're unsure, estimate based on past growth or expected
          returns.
        </p>
        <p style={{ fontWeight: "400" }}>
          If your total savings and investments were RM50,000 last year and are
          now RM55,000, your growth rate is:
        </p>
        <p style={{ fontWeight: "400" }}>📌 (5,000 ÷ 50,000) x 100 = 10%</p>
      </div>
    </div>
  );
};

export default ModalAverageSavingsInvestment;
