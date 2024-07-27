// A. Beautiful Year
// time limit per test2 seconds
// memory limit per test256 megabytes
// It seems like the year of 2013 came only yesterday. Do you know a curious fact? The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now you are suggested to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

// Input
// The single line contains integer y (1000 ≤ y ≤ 9000) — the year number.

// Output
// Print a single integer — the minimum year number that is strictly larger than y and all it's digits are distinct. It is guaranteed that the answer exists.

// Examples
// input
// 1987
// output
// 2013
// input
// 2013
// output
// 2014

const n = 2014;

const getNumOfTimes = function (arrayOfNums) {
  let found = {};
  for (let i = 0; i < arrayOfNums.length; i++) {
    let keys = arrayOfNums[i].toString();
    found[keys] = ++found[arrayOfNums[i]] || 1;
  }
  return found;
};
const checkValueObj = (obj) => {
  return Object.values(obj).some((num) => num >= 2);
};

const beautifulYear = (n) => {
  // Lặp từ n+1 trở đi
  for (let nextYear = n + 1; ; nextYear++) {
    const arrNextYear = nextYear.toString().split(''); // Chuyển n thành mảng các chữ số
    const objCount = getNumOfTimes(arrNextYear); // Đếm số lần xuất hiện của từng số của n
    if (!checkValueObj(objCount)) {
      return nextYear;
    }
  }
};
console.log(beautifulYear(n));
