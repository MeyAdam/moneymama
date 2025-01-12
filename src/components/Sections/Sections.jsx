import React from "react";

const Sections = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
        margin: "80px 0",
      }}
    >
      {children}
    </div>
  );
};

export default Sections;
