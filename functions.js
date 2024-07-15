export default function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
    let reversedString = "";
    for (let i = string.length-1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}