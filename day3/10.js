
let numbers = [12, 3, 45, 7, 9, 22, 56, 19];

let biggest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log("Biggest number:", biggest);
console.log("Smallest number:", smallest);
