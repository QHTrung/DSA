// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false
function isPositiveEvenNumber(number) {
  return number > 0 && number % 2 === 0;
}
console.log(isPositiveEvenNumber(0));
console.log(isPositiveEvenNumber(-1));
console.log(isPositiveEvenNumber(6));
console.log(isPositiveEvenNumber(39));
