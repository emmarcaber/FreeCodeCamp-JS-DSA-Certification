/*
    Problem: Roman Numeral Converter
    Convert the given number into a roman numeral.

    Roman numerals	Arabic numerals
        M	                1000
        CM	                900
        D	                500
        CD	                400
        C	                100
        XC	                90
        L	                50
        XL	                40
        X	                10
        IX	                9
        V	                5
        IV	                4
        I	                1
    All roman numerals answers should be provided in upper-case.
*/

function convertToRomanNumeral(num) {
    if (num <= 0 || num >= 4000) {
        return "Invalid roman numeral range."
    }

    // Create an array of objects that will handle each value
    // corresponding to its roman numeral
    const romanNumerals = [
        { value: 1000, numerals: "M" },
        { value: 900, numerals: "CM" },
        { value: 500, numerals: "D" },
        { value: 400, numerals: "CD" },
        { value: 100, numerals: "C" },
        { value: 90, numerals: "XC" },
        { value: 50, numerals: "L" },
        { value: 40, numerals: "XL" },
        { value: 10, numerals: "X" },
        { value: 9, numerals: "IX" },
        { value: 5, numerals: "V" },
        { value: 4, numerals: "IV" },
        { value: 4, numerals: "IV" },
        { value: 3, numerals: "III" },
        { value: 2, numerals: "II" },
        { value: 1, numerals: "I" },
    ]

    // Empty string to store the final result
    let result = ""

    // Traverse the array of roman numerals
    for (const item of romanNumerals) {

        // While num is greater than roman numeral values
        // proceed to this block
        while (num >= item.value) {
            
            // Concatenate the corresponding roman numeral to result
            result += item.numerals

            // Then, substract the roman numeral corresponding value
            num -= item.value
        }
    }

    return result;
}

convertToRomanNumeral(36)