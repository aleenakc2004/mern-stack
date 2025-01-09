
let n = 10;
let a = 0;
let b = 1;


console.log("Fibonacci Series up to", n, "terms:");
for (let i = 1; i <= n; i++) {
  console.log(a);  
  let nextTerm = a + b;  
  a = b;  
  b = nextTerm; 
}
