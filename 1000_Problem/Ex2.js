// Tính T(n) = 1 x 2 x 3…x N

const calcMultiplies = (n) => {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result *= index;
  }
  return result;
};
console.log(calcMultiplies(3));

// Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
const calcSumOfMul = (n) => {
  let mul = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    mul *= i;
    sum += mul;
  }
  return sum;
};
console.log(calcSumOfMul(4));

// Tính S(n) = x + x^2 + x^3 + … + x^n
const calcSumXhatN = (x, n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += x ** i;
  }
  return sum;
};
console.log(calcSumXhatN(3, 4));
