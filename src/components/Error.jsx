import React from "react";
import PaperBox from "./Paperbox";

const Error = () => {
  return (
    <PaperBox textAlign="center">
      <div style={{ marginBottom: "10px" }}>
        <h5 style={{ fontWeight: "bold" }}>Error</h5>
        <p>Could not retrieve any result.</p>
      </div>
    </PaperBox>
  );
};

export default Error;
