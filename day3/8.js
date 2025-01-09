
let numbers = [12, 3, 45, 7, 9, 22, 56, 19];


for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {

      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}


console.log("Sorted numbers in ascending order:", numbers);
