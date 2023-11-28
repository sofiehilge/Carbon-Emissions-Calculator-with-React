import React, { createContext, useContext, useState } from "react";

const GramsContext = createContext();

export const GramsProvider = ({ children }) => {
  const [gramsData, setGramsData] = useState(null);

  const setGramsDataValue = (value) => {
    setGramsData(value);
  };

  return (
    <GramsContext.Provider
      value={{ gramsData, setGramsData: setGramsDataValue }}
    >
      {children}
    </GramsContext.Provider>
  );
};

export const useGrams = () => {
  const context = useContext(GramsContext);
  if (!context) {
    throw new Error("useGrams must be used within a DataProvider");
  }
  return context;
};
