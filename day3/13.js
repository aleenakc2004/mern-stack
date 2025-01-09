
let numbers = [123, 789, 456, 903, 301, 189, 812, 990];
let biggest = null;
let smallest = null;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 100 && numbers[i] <= 999) {
   
    if (biggest === null || numbers[i] > biggest) {
      biggest = numbers[i];  
    }
    if (smallest === null || numbers[i] < smallest) {
      smallest = numbers[i]; 
    }
  }
}
if (biggest !== null && smallest !== null) {
  console.log("Biggest 3-digit number:", biggest);
  console.log("Smallest 3-digit number:", smallest);
} else {
  console.log("No 3-digit numbers found in the given set.");
}
