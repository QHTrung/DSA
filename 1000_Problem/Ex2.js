// Tính S(n) = 1^2 + 2^2 + … + n^2

const calcSum = function (n) {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index ** 2;
  }
  return sum;
};
console.log(calcSum(3));
