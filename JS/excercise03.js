// Liệt kê ước số của số nguyên dương n
// Viết hàm getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) và trả về một mảng các ước số của n.
// Ví dụ:
// getDivisorList(1) --> [1]
// getDivisorList(10) --> [1, 2, 5, 10]
// getDivisorList(12) --> [1, 2, 3, 4, 6, 12]

// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  const newArr = [];
  if (n < 1 || n > 1000) return 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      newArr.push(i);
    }
  }
  return newArr;
}

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  if (n < 1 || n > 1000) return 0;
  const newArr = Array.from({ length: n - 1 + 1 }, (n, index) => index + 1);
  return newArr.filter((x) => n % x === 0);
}
console.log(getDivisorListV2(1));
