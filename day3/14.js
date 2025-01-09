// Given character
let char = 'a'; 
let convertedChar = '';
let asciiValue = char.charCodeAt(0);
if (asciiValue >= 65 && asciiValue <= 90) {
  convertedChar = String.fromCharCode(asciiValue + 32);
}
else if (asciiValue >= 97 && asciiValue <= 122) {
  convertedChar = String.fromCharCode(asciiValue - 32);
} else {
  convertedChar = char;
}
console.log("Converted character:", convertedChar);

