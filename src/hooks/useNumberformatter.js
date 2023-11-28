import React, {useEffect} from "react";

const useNumberFormatter = (numbersToFormat) => {

    const locale = ["de-DE"]

    useEffect(()=> {
        //check if NumbersToFormat is provided
        if(!numbersToFormat || numbersToFormat.length === 0){
            console.warn("please provide valud numbersToFormat");
            return;
        }
        // Create a formatter with the current locale
        const formatter = new Intl.NumberFormat(locale);

        //Display the formatted numbers with comments
        console.log(`Locale: ${locale}`);
        numbersToFormat.forEach((number, index) => {
            const formattedNumber = formatter.format(number);
            console.log(`Number ${index +1}: ${formattedNumber}`);
        });
    }, [numbersToFormat]); // Run the effect whenever numbersToFormat changes

    const formattedNumbers = numbersToFormat.map((number) =>
    new Intl.NumberFormat(locale).format(number));

    return {
        formattedNumbers,
    };
};

export default useNumberFormatter;