const givenSet = [1, 2, 3, 4, 5, 6, 9, 12, 15, 18, 20];

console.log("Multiples of 3 in the given set:");


for (let i = 0; i < givenSet.length; i++) {
  if (givenSet[i] % 3 === 0) {
    console.log(givenSet[i]);
  }
}
