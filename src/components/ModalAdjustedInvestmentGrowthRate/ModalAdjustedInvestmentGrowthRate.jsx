import React from "react";
import { IoClose } from "react-icons/io5";
import css from "./ModalAdjustedInvestmentGrowthRate.module.css";

const ModalAdjustedInvestmentGrowthRate = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          <IoClose />
        </button>
        <p style={{ fontWeight: "600" }}>
          Why adjust your investment growth rate?
        </p>
        <p style={{ fontWeight: "400" }}>
          A higher growth rate means more risk but potentially higher return. A
          lower growth rate means stability but requires more savings effort.
        </p>
      </div>
    </div>
  );
};

export default ModalAdjustedInvestmentGrowthRate;
