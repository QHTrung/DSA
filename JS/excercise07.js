//Kiểm tra mảng có chứa ít nhất 1 số nguyên tố không?
function isPrime(n) {
  if (n < 0 || n <= 1 || n >= 1000) return false;
  if (n % 2 == 0 && n > 2) return false;
  const sq = Math.sqrt(n);
  for (let i = 3; i < sq + 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function hasPrimeV1(numberList) {
  let flag = false;
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (isPrime(numberList[i])) {
      flag = true;
    }
  }
  return flag;
}

function hasPrimeV2(numberList) {
  let flag = false;
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  numberList.forEach((number) => {
    if (isPrime(number)) {
      flag = true;
    }
  });
  return flag;
}
function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  return numberList.find((number) => isPrime(number)) !== undefined;
}
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  return numberList.findIndex((number) => isPrime(number)) != -1;
}
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length == 0) return false;
  return numberList.some((number) => isPrime(number));
}
// console.log(hasPrimeV5(1));
// console.log(hasPrimeV5([]));
// console.log(hasPrimeV5([1, 0, 4]));
// console.log(hasPrimeV5([1, 2, 4, 5, 7]));
