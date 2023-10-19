// rules: -100 < a < b < 100

function createArrayInRangeV1(a, b) {
  if (a <= -100 || a >= b || b >= 100) return;
  const newArr = [];
  for (let index = a; index < b + 1; index++) {
    newArr.push(index);
  }
  return newArr;
}
function createArrayInRangeV2(a, b) {
  if (a <= -100 || a >= b || b >= 100) return;
  return Array.from({ length: (b - a) / 1 + 1 }, (_, i) => a + i);
}
console.log(createArrayInRangeV2(1, 5));
