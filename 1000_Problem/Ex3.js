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
const calcSum2 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i * 2);
  }
  return sum;
};
// Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
const calcSum3 = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1 / (i * 2 + 1);
  }
  return sum;
};
console.log(calcSum3(n));
