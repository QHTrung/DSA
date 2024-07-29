// Tính S(n) = 1 + 2 + 3 + … + n
const calcSum = (n) => {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  return sum;
};
console.log(calcSum(5));
// Tính S(n) = 1^2 + 2^2 + … + n^2

const calcSum2 = function (n) {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index ** 2;
  }
  return sum;
};
console.log(calcSum2(3));

// Tính S(n) = 1 + ½ + 1/3 + … + 1/n
const n = 2;
const calcSum1 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }
  return sum;
};
// Tính S(n) = ½ + ¼ + … + 1/2n
const calcSum3 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i * 2);
  }
  return sum;
};
// Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
const calcSum4 = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1 / (i * 2 + 1);
  }
  return sum;
};
console.log(calcSum3(n));
