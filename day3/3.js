const givenSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

console.log("Even numbers in the given set:");

for (let i = 0; i < givenSet.length; i++) {
  if (givenSet[i] % 2 === 0) { 
    console.log(givenSet[i]);
  }
}