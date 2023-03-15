export const generateExpression = () => {
  let number1 = Math.floor(Math.random() * 10);
  let number2 = Math.floor(Math.random() * 10);
  let number3 = Math.floor(Math.random() * 10);
  let operand1 = ["/", "*", "+", "-"][Math.floor(Math.random() * 4)];
  let operand2 = ["/", "*", "+", "-"][Math.floor(Math.random() * 4)];

  // NEEDS FIXES 
  // NEEDS FIXES 
  // NEEDS FIXES 
  // NEEDS FIXES 
const findDividers = (number) => {
  let dividers = [];
  let randomDivider;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }
  randomDivider = dividers[Math.floor(Math.random()*dividers.length)]

  return randomDivider;
}
  

  // Determine if the expression should have parentheses
  let useParentheses = true

  // Choose where to place the parentheses
  let leftParentheses = Math.random() < 0.5;
  let rightParentheses = false;
  if (useParentheses) {
    leftParentheses = Math.random() < 0.5;
    rightParentheses = !leftParentheses;
  }

  // Build the expression string
  let expression = "";
  if (useParentheses) {
    if (operand1 === "/" && operand2 === "/") {
      return generateExpression(); // avoid expressions like 5/2/3
    }
    if (leftParentheses) {
      if (operand1 === "/" && number2 === 0) {
        return generateExpression(); // avoid division by zero
      } 

      if(operand2==='/'){
        let parentResult = eval(`(${number1} ${operand1} ${number2})`)
        
        number3 = findDividers(parentResult);
      }

      if(operand1==='/'){
        number1 = number2 * Math.floor(Math.random() * 10);
      }
      
      expression += `(${number1} ${operand1} ${number2}) ${operand2} ${number3}`;
    } else {
      if (operand2 === "/" && number3 === 0) {
        return generateExpression(); // avoid division by zero
      }
      if (operand2 === "/") {
        number2 = number3 * Math.floor(Math.random() * 10);
      }
      if(operand1==='/'){
        let parentResult;
        parentResult = eval(`(${number2} ${operand2} ${number3})`)
        number1 = parentResult*Math.floor(Math.random()*10)
      }
      expression += `${number1} ${operand1} (${number2} ${operand2} ${number3})`;
    }
  } else {
    if (operand1 === "/" && operand2 === "/") {
      return generateExpression(); // avoid expressions like 5/2/3
    } else if (operand1 === "/") {
      number1 = number2 * Math.floor(Math.random() * 10);
    } else if (operand2 === "/") {
      number2 = number3 * Math.floor(Math.random() * 10);
    } else if (
      operand1 === "/" &&
      number2===0
    ) {
      return generateExpression(); // avoid division by zero
    } else if (operand2 === "/" && number3 === 0) {
      return generateExpression(); // avoid division by zero
    }

    expression += `${number1} ${operand1} ${number2} ${operand2} ${number3}`;
  }

  // Evaluate the expression to get the result
  let result = eval(expression);

  // Check if the parentheses are dividing evenly
  if (useParentheses) {
    let parenResult = rightParentheses ? number2 + number3 : number1 + number2;
    if (parenResult % 1 !== 0) {
      return generateExpression(); // Parentheses don't divide evenly, generate a new expression
    }
  }

  // Return the expression and result
  return {
    expression: expression,
    result: result,
  };
};
