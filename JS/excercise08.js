//Kiểm tra mảng có phải tất cả đều là số hoàn hảo không?
function isPerfectNumber(n) {
  if (n < 1 || n >= 1000) return -1;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      count += i;
    }
  }
  return count == n;
}
// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  let flag = true;
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectNumber(numberList[i])) {
      flag = false;
    }
  }
  return flag;
}
// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  const result = numberList.reduce(
    (count, number) => (isPerfectNumber(number) ? count + 1 : count),
    0,
  );
  return result == numberList.length;
}

// every
function isAllPerfectNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  return numberList.every((number) => isPerfectNumber(number));
}
console.log(isAllPerfectNumbersV2([]));
console.log(isAllPerfectNumbersV2([1, 6]));
console.log(isAllPerfectNumbersV2([1, 2, 3]));
console.log(isAllPerfectNumbersV2([6]));
console.log(isAllPerfectNumbersV2([6, 28]));
