
let binary = "1011"; 
let decimal = 0;
for (let i = 0; i < binary.length; i++) {
  let bit = parseInt(binary[binary.length - 1 - i]);
  decimal += bit * Math.pow(2, i);
}
console.log("Decimal value of binary", binary, "is:", decimal);
