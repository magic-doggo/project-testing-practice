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
            let currentIndex = alphabet.indexOf(letter) + shiftFactor;
            if (currentIndex > 25) currentIndex = currentIndex-26;
            encryptedString += alphabet.charAt(currentIndex);
        } else if (upperCaseAlphabet.includes(letter)) {
            let currentIndex = upperCaseAlphabet.indexOf(letter) + shiftFactor;
            if (currentIndex > 25) currentIndex = currentIndex-26;
            encryptedString += upperCaseAlphabet.charAt(currentIndex);
        } else encryptedString += letter;
    }
    return encryptedString;
}

export function analyzeArray(array) {
    let sum = 0;
    let min = array[0];
    let max = array[0];
    for (let number of array) {
      sum += number;
      if (number < min) min = number;
      if (number > max) max = number;
    }
    let length = array.length;
    let average = sum / length;
    
    return {
     average: average,
     min: min,
     max: max,
     length: length
    }
  }