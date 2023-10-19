// Using loop from 2 to n - 1
function isPrimeV1(n) {
  if (n < 0 || n >= 1000) return false;
  if (n < 2) return false;
  for (let i = 2; i < n - 1; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function isPrimeV2(n) {
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
console.log(isPrimeV2(2));
console.log(isPrimeV2(3));
console.log(isPrimeV2(4));
console.log(isPrimeV2(5));
console.log(isPrimeV2(6));
console.log(isPrimeV2(7));
console.log(isPrimeV2(11));
console.log(isPrimeV2(13));
console.log(isPrimeV2(33));
