export const generateOrderedOperationsAndResults = () => {
  let multipNumber1;
  let multipNumber2;
  let additionNumber1;
  let additionNumber2;
  let subtractionNumber1;
  let subtractionNumber2;
  let number1;
  let number2;
  let number3;
  let divisionNumber1 = Math.floor(Math.random() * 20 + 1);
  let divisionNumber2 = divisionNumber1 * Math.floor(Math.random() * 10);
  const divResult = divisionNumber2 / divisionNumber1;

  const randomOperand = () => {
    const operands = ["+", "-", "*", "/"];
    const operandIndex1 = Math.floor(Math.random() * 4);
    const operandIndex2 = Math.floor(Math.random() * 4);
    const operand1 = operands[operandIndex1];
    const operand2 = operands[operandIndex2];
    return {
      operand1,
      operand2,
    };
  };

  const randomOperationAndResult = () => {
    let operation;
    const stableOperand1 = randomOperand().operand1;
    const stableOperand2 = randomOperand().operand2;
    let result;

    if (stableOperand1 === "/" && stableOperand2 === "/") {
      let divisionNumber3 = Math.floor(Math.random() * 20 + 1);
      if (divResult % divisionNumber3 !== 0) {
        return randomOperationAndResult();
      }
      operation =
        divisionNumber2.toString() +
        stableOperand1 +
        divisionNumber1.toString() +
        stableOperand2 +
        divisionNumber3.toString();
    
    } else if (stableOperand1 === "*" && stableOperand2 === "/") {
      multipNumber1 = Math.floor(Math.random() * 20);
      multipNumber2 = Math.floor(Math.random() * 10);
      number3 = Math.floor(Math.random() * 20 + 1);
      if ((multipNumber1 * multipNumber2) % number3 !== 0) {
        return randomOperationAndResult();
      }

      operation =
        multipNumber1.toString() +
        stableOperand1 +
        multipNumber2.toString() +
        stableOperand2 +
        number3.toString();
      
    } else if (stableOperand1 === "+" && stableOperand2 === "/") {
      additionNumber1 = Math.floor(Math.random() * 20);
      additionNumber2 = Math.floor(Math.random() * 10);
      number3 = Math.floor(Math.random() * 20 + 1);
      if ((additionNumber1 + multipNumber2) % number3 !== 0) {
        return randomOperationAndResult();
      }

      operation =
        additionNumber1.toString() +
        stableOperand1 +
        additionNumber2.toString() +
        stableOperand2 +
        number3.toString();
      
    } else if (stableOperand1 === "-" && stableOperand2 === "/") {
      subtractionNumber1 = Math.floor(Math.random() * 20);
      subtractionNumber2 = Math.floor(Math.random() * 10);
      number3 = Math.floor(Math.random() * 20 + 1);
      if ((subtractionNumber1 - subtractionNumber2) % number3 !== 0) {
        return randomOperationAndResult();
      }

      operation =
        subtractionNumber1.toString() +
        stableOperand1 +
        subtractionNumber2.toString() +
        stableOperand2 +
        number3.toString();
    
    } else if (stableOperand1 === "/") {
      number3 = Math.floor(Math.random() * 20 + 1);

      operation =
        divisionNumber2.toString() +
        stableOperand1 +
        divisionNumber1.toString() +
        stableOperand2 +
        number3.toString();
      
    } else {
      number1 = Math.floor(Math.random() * 20);
      number2 = Math.floor(Math.random() * 10);
      number3 = Math.floor(Math.random() * 10);
      operation =
        number1.toString() +
        stableOperand1 +
        number2.toString() +
        stableOperand2 +
        number3.toString();
    }

    result = eval(operation);
    return { operation, result };
  };

  return{randomOperationAndResult}
  
};
