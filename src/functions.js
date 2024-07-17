export default function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

export let calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    divide: function (num1, num2) {
        return num1 / num2;
    }
}

export function caesarCipher(string, shiftFactor) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseAlphabet = alphabet.toUpperCase();
    let encryptedString = "";
    for (let letter of string) {
        if (alphabet.includes(letter)) {
            let currentIndex = alphabet.indexOf(letter);
            encryptedString += alphabet.charAt(currentIndex+shiftFactor);
        } else if (upperCaseAlphabet.includes(letter)) {
            let currentIndex = alphabet.indexOf(letter);
            encryptedString += upperCaseAlphabet.charAt(currentIndex+shiftFactor);
        } else encryptedString += letter;
    }
    return encryptedString;
}