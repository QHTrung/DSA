//Tính trung bình cộng của các số chẳn trong mảng
function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length == 0) return 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) {
      sum += numberList[i];
      count++;
    }
  }
  return count == 0 ? 0 : Math.round(sum / count);
}
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));
