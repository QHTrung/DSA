/*Tìm 2 số trong mảng có tổng bằng một số cho trước
Viết hàm findSumPair(numberList, targetSum) để tìm ra 2 số trong mảng numberList có tổng bằng targetSum

Lưu ý:

numberList có thể không phải là mảng

Trường hợp không tìm thấy 2 số thoả yêu cầu thì trả về mảng rỗng

Trường hợp tìm thấy 2 số thoả yêu cầu thì trả về mảng chứa 2 số đó và sắp xếp tăng dần.

Ví dụ:

findSumPair({}); // []
findSumPair([], 10); // []
findSumPair([1, 2], 2); // [] vì không có 2 số nào có tổng bằng 2
findSumPair([3, 2, 1], 5); // [2, 3] vì 2 + 3 = 5 và sắp xếp tăng dần nên có mảng [2, 3]
findSumPair([3, 3, 1, 2], 6); // [3, 3]
*/
function findSumPair(numberList, targetSum) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length == 0) return [];
  let result = [];
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] == targetSum) {
        result.push(numberList[i], numberList[j]);
      }
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(findSumPair({}));
console.log(findSumPair([], 10));
console.log(findSumPair([1, 2], 2));
console.log(findSumPair([3, 2, 1], 5));
console.log(findSumPair([3, 3, 1, 2], 6));
