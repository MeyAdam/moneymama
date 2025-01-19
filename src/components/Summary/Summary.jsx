import React from "react";

const Summary = () => {
  return (
    <div
      id="summary"
      style={{
        display: "flex",
      }}
    >
      <div>
        <Conclusion />
        <Recommendations />
      </div>
      <EmailReport />
    </div>
  );
};

export default Summary;
