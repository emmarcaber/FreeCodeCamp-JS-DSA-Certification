/*
    Problem: Caesars Cipher
    Description:
    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

    Write a function which takes a ROT13 encoded string as input and returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

/**
 * Decodes ROT13 cipher
 * @param {string} str 
 * @returns str
 */
function rot13(str) {

    // Create a regex to match all the uppercase letters
    const upperCaseRegex = /[A-Z]/;

    // Function to decode the character
    function decodeChar(char) {

        // IF the current char is an uppercase letter, decode it
        if (upperCaseRegex.test(char)) {
            const charCode = char.charCodeAt(0);
            const decodedChar = ((charCode - 65 + 13) % 26) + 65;
            return String.fromCharCode(decodedChar)
        } 
        // ELSE, if the char is a non-alphanumeric character
        // just return it
        else {
            return char;
        }
    }

    // Split the string into array of chars
    // Decode every chars using decodeChar function
    // Join the decoded array of chars into string again
    return str.split('').map(decodeChar).join('');
}

rot13("SERR PBQR PNZC");