
let num = 121;  
let numStr = num.toString();
let reversedStr = '';
for (let i = numStr.length - 1; i >= 0; i--) {
  reversedStr += numStr[i];  
}
if (numStr === reversedStr) {
  console.log(num, "is a palindrome.");
} else {
  console.log(num, "is not a palindrome.");
}
