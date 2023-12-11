import React, { useState, useEffect } from "react";
import { useGrams } from "../context/GramsContext";
import useNumberFormatter from "../hooks/useNumberformatter";

const Comparison = () => {
  const [monthlyViews, setMonthlyViews] = useState(1000);
  const [CO2Value, setCO2Value] = useState(0);
  const [numberTee, setNumberTee] = useState(0);
  const [numberTrees, setNumberTrees] = useState(0);
  const { gramsData } = useGrams();

  //use the useNumberFormatter hook on monthlyViews, CO2Value and numbertee
  const { formattedNumbers: formattedMonthlyViews } = useNumberFormatter([
    monthlyViews,
  ]);
  const { formattedNumbers: formattedCO2Value } = useNumberFormatter([
    CO2Value,
  ]);
  const { formattedNumbers: formattedNumberTee } = useNumberFormatter([
    numberTee,
  ]);

  // const handleIncrement = () => {
  //   setMonthlyViews((prevViews) => (prevViews < 10000 ? prevViews + 100 : 100));
  // };

  // const handleDecrement = () => {
  //   setMonthlyViews((prevViews) => (prevViews > 100 ? prevViews - 100 : 10000));
  // };

  const handleIncrement = () => {
    if (monthlyViews === 10) {
      setMonthlyViews(100);
    } else if (monthlyViews === 100) {
      setMonthlyViews(1000);
    } else if (monthlyViews === 1000) {
      setMonthlyViews(10000);
    } else if (monthlyViews === 10000) {
      setMonthlyViews(100000);
    } else {
      //if monthlyViews is 100.000, cycle back to 10
      setMonthlyViews(10);
    }
  };

  const handleDecrement = () => {
    if (monthlyViews === 10) {
      setMonthlyViews(100000);
    } else if (monthlyViews === 100000) {
      setMonthlyViews(10000);
    } else if (monthlyViews === 10000) {
      setMonthlyViews(1000);
    } else if (monthlyViews === 1000) {
      setMonthlyViews(100);
    } else {
      setMonthlyViews(10);
    }
  };

  useEffect(() => {
    const calculatedCO2Value = ((gramsData * monthlyViews * 12) / 1000).toFixed(
      2
    );
    setCO2Value(calculatedCO2Value);

    const calculatedNumberTrees = Math.ceil(calculatedCO2Value / 15);
    setNumberTrees(calculatedNumberTrees);

    const calculatedTeaCups = (Number(calculatedCO2Value) / 0.015).toFixed(2);
    setNumberTee(calculatedTeaCups);
  }, [gramsData, monthlyViews]);

  return (
    <>
    
        <p className="mt-8 font-Montserrat">Over a year, with</p>
        <div className="flex items-center justify-center mt-2 space-x-4">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 text-white bg-gray-700  rounded-full"
          >
            -
          </button>
          <span className="text-2xl">
            {formattedMonthlyViews && formattedMonthlyViews[0]}
          </span>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 font-bold text-white bg-gray-700  rounded-full"
          >
            +
          </button>
        </div>
      <div className="flex flex-row items-center justify-center">
        <p className="mt-2 font-Montserrat">
          monthly page views, this web page produces
        </p>
        <span className="mt-2 text-xl font-Montserrat px-5">
          {formattedCO2Value && formattedCO2Value[0]}
        </span>
      <p className="mt-2 font-Montserrat">kg of CO2.</p>
      <br />
      </div>
      <p className="font-Inter">
        As much CO2 as boiling water for
        <span className="text-xl font-Inter px-5">
          {formattedNumberTee && formattedNumberTee[0]}
        </span>{" "}
        cups of tea
      </p>
      <p className="font-Montserrat">
        This webpage emits the same amount as{" "}
        <span className="text-xl font-bold px-5"> {numberTrees}</span> trees can
        absorb in one year
      </p>
      <b className="font-Montserrat">Take action here ›</b>
      <a
        href="https://withyodo.com/get-access/"
        className=" font-Montserrat inline-block w-1/3 p-2 px-12 m-4 text-sm text-center text-white bg-black rounded-full"
      >
        Get early access
      </a>
    </>
  );
};

export default Comparison;
