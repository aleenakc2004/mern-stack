
let primeNumbers = [];  
let num = 2;  
while (primeNumbers.length < 10) {
  let isPrime = true;  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;  
      break;
    }
  }

  if (isPrime) {
    primeNumbers.push(num);
  }
  

  num++;
}


console.log("First 10 prime numbers:", primeNumbers);
