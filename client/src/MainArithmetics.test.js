import  {generateNumbersAndResults}  from "./MainArithmetics";

test("returns an object with two random numbers and their:addition, subtraction, multiplication, division", () => {
  const additionResult = generateNumbersAndResults().addition();
  expect(additionResult).toHaveProperty("number1");
  expect(additionResult).toHaveProperty("number2");
  expect(additionResult).toHaveProperty("result");
  expect((additionResult.number1+additionResult.number2)).toBe(additionResult.result)

  const subtractionResult = generateNumbersAndResults().subtraction();
  expect(subtractionResult).toHaveProperty("number1");
  expect(subtractionResult).toHaveProperty("number2");
  expect(subtractionResult).toHaveProperty("result");
  expect((subtractionResult.number1-subtractionResult.number2)).toBe(subtractionResult.result)

  const multiplicationResult = generateNumbersAndResults().multiplication();
  expect(multiplicationResult).toHaveProperty("number1");
  expect(multiplicationResult).toHaveProperty("number2");
  expect(multiplicationResult).toHaveProperty("result");
  expect((multiplicationResult.number1*multiplicationResult.number2)).toBe(multiplicationResult.result)
  
  const divisionResult = generateNumbersAndResults().division();
  expect(divisionResult).toHaveProperty("number1");
  expect(divisionResult).toHaveProperty("number2");
  expect(divisionResult).toHaveProperty("result");
  expect((divisionResult.number2/divisionResult.number1)).toBe(divisionResult.result)
  expect(divisionResult.number1).toBeGreaterThan(0)
});