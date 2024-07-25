// Tính S(n) = 1 + 2 + 3 + … + n
const calcSum = (n) => {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  return sum;
};
console.log(calcSum(5));
