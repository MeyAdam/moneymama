import React, { useState } from "react";
import BtnYellow from "../BtnYellow/BtnYellow";
import { FaCircleCheck } from "react-icons/fa6";
import css from "./EmailReport.module.css";

const EmailReport = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSending(true); // loading state

    try {
      // Simulate sending the email
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating network delay

      setIsSent(true); // Update the button to "Sent"
    } catch (error) {
      alert("Failed to send the email. Please try again.");
    } finally {
      setIsSending(false); // Reset loading state
    }
  };

  return (
    <section className={css.sectionEmailReport}>
      <div className={css.wrapperEmailReport}>
        <h2 style={{ textAlign: "center", fontSize: "28px" }}>
          Would you like an email copy of your report?
        </h2>
        <div className={css.wrapperEmail}>
          <input
            type="email"
            placeholder="Enter email"
            className={css.inputEmail}
            value={email}
            onChange={handleEmailChange}
          />
          {!isSent ? (
            <button
              className="btnYellow"
              type="button"
              onClick={handleEmailSubmit}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Get my report"}
            </button>
          ) : (
            <button
              className="btnYellow"
              type="button"
              disabled
              style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "center" }}
            >
              <FaCircleCheck color="#34C759" />
              Sent!
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailReport;
