import React from "react";
import PaperBox from "./Paperbox";

const Error = () => {
  return (
    <PaperBox textAlign="center">
      <div style={{ marginBottom: "16px" }}>
        <h5 style={{ fontWeight: "bold" }}>Error</h5>
        <p>Cannot retrieve result.</p>
      </div>
    </PaperBox>
  );
};

export default Error;
