// Tính tổng tất cả các “ước số” của số nguyên dương n
let n = 12345;
const calcDivisor = (n) => {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    if (n % index == 0) {
      sum += index;
    }
  }
  return sum;
};
// Tính tích tất cả các “ước số” của số nguyên dương n
const calcProduct = (n) => {
  let p = 1;
  for (let index = 1; index <= n; index++) {
    if (n % index == 0) {
      p *= index;
    }
  }
  return p;
};
// Tìm ước số lẻ lớn nhất của số nguyên dương n
const findMaxOddDivisor = (n) => {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 == 1 && i > max) {
      max = i;
    }
  }
  return max;
};
// Đếm số lượng chữ số của n
const countNumberOfDigits = (n) => {
  let count = 0;
  while (n !== 0) {
    count++;
    n = Math.trunc(n / 10);
  }
  return count;
};
// Tính tích các chữ số của số nguyên dương n
const calcPOfDigits = (n) => {
  let p = 1;
  while (n !== 0) {
    p *= Math.trunc(n % 10);
    n = Math.trunc(n / 10);
  }
  return p;
};
// Đếm số lượng chữ số lẻ của số nguyên dương n
const countNumOfOddDigits = (n) => {
  let count = 0;
  while (n !== 0) {
    let oddNum = Math.trunc(n % 10);
    if (oddNum % 2 == 1) {
      count++;
    }
    n = Math.trunc(n / 10);
  }
  return count;
};
console.log(countNumOfOddDigits(n));

calcDivisor,
  calcProduct,
  findMaxOddDivisor,
  countNumberOfDigits,
  calcPOfDigits,
  countNumOfOddDigits;
