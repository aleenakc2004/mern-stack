

let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange");
console.log("After push:", fruits);
let lastFruit = fruits.pop();
console.log("After pop:", fruits);
console.log("Popped element:", lastFruit); 
fruits.unshift("Grapes");
console.log("After unshift:", fruits);
let firstFruit = fruits.shift();
console.log("After shift:", fruits); 
console.log("Shifted element:", firstFruit);
let slicedFruits = fruits.slice(1, 3);
console.log("Original array after slice:", fruits);
console.log("Sliced array:", slicedFruits); 
let moreFruits = ["Pineapple", "Mango"];
let combinedFruits = fruits.concat(moreFruits);
console.log("Combined array:", combinedFruits); 
let index = combinedFruits.indexOf("Banana");
console.log("Index of 'Banana':", index); 
