import React, {useState} from "react";

const Comparison = () => {
const [monthlyViews, setMonthlyViews] = useState(10);

const handleIncrement = () => {
    if (monthlyViews === 10){
        setMonthlyViews(100);
    } else if (monthlyViews === 100) {
        setMonthlyViews(1000);
    } else {
        //If monthlyViews is 1000, cycle back to 10
        setMonthlyViews(10)
    }
};

const handleDecrement = () => {
    if (monthlyViews ===10){
        setMonthlyViews(1000);
    } else if (monthlyViews===100){
        setMonthlyViews(10)
    } else {
        setMonthlyViews(100);
    }
}

    return ( <>
    <p>Over a year, with</p>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <span>{monthlyViews}</span>
    <p>monthly page views, this web page produces</p>
    <span></span>


    </> );
}
 
export default Comparison;