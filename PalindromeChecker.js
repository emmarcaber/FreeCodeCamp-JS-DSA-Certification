function palindromeChecker(str) {

    // Remove all the non-alphanumeric characters and make it lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    return cleanStr === cleanStr.split('').reverse().join('')
}

const result = palindromeChecker("0_0 (: /-\ :) 0-0");