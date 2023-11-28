import React, { useState, useEffect } from "react";
import { useGrams } from "../context/GramsContext";
import useNumberFormatter from "../hooks/useNumberformatter";

const Comparison = () => {
  const [monthlyViews, setMonthlyViews] = useState(1000);
  const [CO2Value, setCO2Value] = useState(0);
  const [numberTee, setNumberTee] = useState(0);
  const [numberTrees, setNumberTrees] = useState(0);
  const { gramsData } = useGrams();

  //use the useNumberFormatter hook on monthlyViews, CO2Value and numberTee
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
    if (monthlyViews === 10) {
      setMonthlyViews(100);
    } else if (monthlyViews === 100) {
      setMonthlyViews(1000);
    } else {
      //If monthlyViews is 1000, cycle back to 10
      setMonthlyViews(10);
    }
  };

  const handleDecrement = () => {
    if (monthlyViews === 10) {
      setMonthlyViews(1000);
    } else if (monthlyViews === 100) {
      setMonthlyViews(10);
    } else {
      setMonthlyViews(100);
    }
  };

  //useEffect to recalculate the CO2 value whenever monthlyViews Change
  useEffect(() => {
    const calculatedCO2Value = ((gramsData * monthlyViews * 12) / 1000).toFixed(
      2
    );
    setCO2Value(calculatedCO2Value);

    //recalculate number of trees and update state
    const calculatedNumberTrees = Math.ceil(calculatedCO2Value / 10);
    setNumberTrees(calculatedNumberTrees);

    //recalculate the number of tea cups and update state
    const calculatedTeaCups = (Number(calculatedCO2Value) / 0.015).toFixed(2);
    setNumberTee(calculatedTeaCups);
  }, [gramsData, monthlyViews]);

  return (
    <>
      <p>Over a year, with</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <span>{formattedMonthlyViews && formattedMonthlyViews[0]}</span>
      <p>monthly page views, this web page produces</p>
      <span>{formattedCO2Value && formattedCO2Value[0]}</span>
      <p>kg of CO2 equivalant.</p>
      <p>
        As much CO2 as boilling water for
        <span>{formattedNumberTee && formattedNumberTee[0]}</span> cups of tea
      </p>
      <p>
        This webpage emits the same amount as
        <span> {numberTrees}</span> trees can absorb in on year
      </p>

      <button>Take action</button>
    </>
  );
};

export default Comparison;
