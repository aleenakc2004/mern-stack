function simpleCalculator() {
  
  const operations = ['+', '-', '*', '/'];

  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Enter the operation (+, -, *, /):");


  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter valid numbers.");
    return;}
  for (let i = 0; i < operations.length; i++) {
    if (operation === operations[i]) {
      let result;
      
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            console.log("Cannot divide by zero.");
            return;
          }
          result = num1 / num2;
          break;
        default:
          console.log("Invalid operation.");
          return;
      }

      console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
      return; 
    }
  }

  
  console.log("Invalid operation entered.");
}

simpleCalculator();


