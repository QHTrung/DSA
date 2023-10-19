// Tìm số xuất hiện nhiều nhất trong mảng
// Viết hàm mostFrequent(numberList) nhận vào là một mảng số và trả về số có số lần xuất hiện nhiều nhất.

// Lưu ý:

// Tham số truyền vào có thể không phải là mảng, lúc đó trả về undefined

// Trường hợp mảng rỗng, trả về undefined

// Trường hợp có nhiều số có cùng số lần xuất hiện, trả về số đầu tiên

// Ví dụ:

// mostFrequent(true) --> undefined

// mostFrequent() --> undefined

// mostFrequent([]) --> undefined

// mostFrequent([1, 2, 3]) --> 1

// mostFrequent([2, 1, 3]) --> 2

// mostFrequent([2, 2, 3, 3, 2, 3, 3]) --> 3 vì 3 xuất hiện 4 lần, còn 2 xuất hiện 3 lần
function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length == 0) return undefined;
  else if (numberList.length == 1) return numberList[0];
  const obj = {};
  let maxKey = undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    obj[number] = obj[number] == undefined ? 1 : obj[number] + 1;
    if (maxKey == undefined || obj[number] > obj[maxKey]) {
      maxKey = number;
    }
  }

  return Number.parseInt(maxKey);
}
console.log(mostFrequent(true));
console.log(mostFrequent());
console.log(mostFrequent([]));
console.log(mostFrequent([9]));
console.log(mostFrequent([1, 2, 3]));
console.log(mostFrequent([2, 1, 3]));
console.log(mostFrequent([2, 2, 3, 3, 2, 3, 3]));
