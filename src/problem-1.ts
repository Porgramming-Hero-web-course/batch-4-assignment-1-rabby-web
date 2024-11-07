function sumArray(arrNumbers: number[]): number {
  return arrNumbers.reduce(
    (previousNumber, currentNumber) => previousNumber + currentNumber,
    0
  );
}
const result: number = sumArray([1, 2, 3, 4, 5]);
console.log(result);
