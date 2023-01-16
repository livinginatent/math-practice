export const generateNumbersAndResults = () => {
  const addition = () => {
    const number1 = Math.floor(Math.random() * 50);
    const number2 = Math.floor(Math.random() * 50);
    const result = number1 + number2 || 0;
    return {
      number1,
      number2,
      result,
    };
  };

  const subtraction = () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * number1);
    const result = number1 - number2;
    return {
      number1,
      number2,
      result,
    };
  };

  const multiplication = () => {
    const number1 = Math.floor(Math.random() * 15);
    const number2 = Math.floor(Math.random() * 15);
    const result = number1 * number2 || 0;
    return {
      number1,
      number2,
      result,
    };
  };

  const division = () => {
    const number1 = Math.floor(Math.random() * 20 + 1);
    const number2 = number1 * Math.floor(Math.random() * 10);
    const result = number2 / number1;
    return {
      number1,
      number2,
      result,
    };
  };

  return {
    addition,
    multiplication,
    subtraction,
    division,
  };
};
