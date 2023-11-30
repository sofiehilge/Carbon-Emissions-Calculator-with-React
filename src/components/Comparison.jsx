import React, { useState, useEffect } from "react";
import { useGrams } from "../context/GramsContext";
import useNumberFormatter from "../hooks/useNumberformatter";

const Comparison = () => {
  const [monthlyViews, setMonthlyViews] = useState(100);
  const [CO2Value, setCO2Value] = useState(0);
  const [numberTee, setNumberTee] = useState(0);
  const [numberTrees, setNumberTrees] = useState(0);
  const { gramsData } = useGrams();

  const { formattedNumbers: formattedMonthlyViews } = useNumberFormatter([
    monthlyViews,
  ]);
  const { formattedNumbers: formattedCO2Value } = useNumberFormatter([
    CO2Value,
  ]);
  const { formattedNumbers: formattedNumberTee } = useNumberFormatter([
    numberTee,
  ]);

  const handleIncrement = () => {
    setMonthlyViews((prevViews) => (prevViews < 10000 ? prevViews + 100 : 100));
  };

  const handleDecrement = () => {
    setMonthlyViews((prevViews) => (prevViews > 100 ? prevViews - 100 : 10000));
  };

  useEffect(() => {
    const calculatedCO2Value = ((gramsData * monthlyViews * 12) / 1000).toFixed(
      2
    );
    setCO2Value(calculatedCO2Value);

    const calculatedNumberTrees = Math.ceil(calculatedCO2Value / 10);
    setNumberTrees(calculatedNumberTrees);

    const calculatedTeaCups = (Number(calculatedCO2Value) / 0.015).toFixed(2);
    setNumberTee(calculatedTeaCups);
  }, [gramsData, monthlyViews]);

  return (
    <>
      <p>Over a year, with</p>
      <button
        onClick={handleDecrement}
        className="px-4 py-2 m-2 font-bold text-white bg-red-700 rounded-full"
      >
        -
      </button>
      <span>{formattedMonthlyViews && formattedMonthlyViews[0]}</span>
      <button
        onClick={handleIncrement}
        className="px-4 py-2 m-2 font-bold text-white bg-green-700 rounded-full"
      >
        +
      </button>
      <p>monthly page views, this web page produces</p>
      <span>{formattedCO2Value && formattedCO2Value[0]}</span>
      <p>kg of CO2 equivalent.</p>
      <p>
        As much CO2 as boiling water for
        <span>{formattedNumberTee && formattedNumberTee[0]}</span> cups of tea
      </p>
      <p>
        This webpage emits the same amount as
        <span> {numberTrees}</span> trees can absorb in one year
      </p>

      <button className="p-2 px-12 m-6 text-sm text-white bg-black rounded-full">
        Take action
      </button>
    </>
  );
};

export default Comparison;
