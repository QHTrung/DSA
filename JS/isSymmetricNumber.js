// Kiểm tra số có tối đa 3 chữ số có phải là số đối xứng hay không?
// Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false.

// Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)

// Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.

// Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...

const isSymmetricNumber = (number) => {
  if (number < 0 || number > 999) return false;
  if (number < 10) return true;
  if (number <= 99)
    return Math.trunc(number % 10) === Math.trunc((number % 100) / 10);
  return Math.trunc(number % 10) === Math.trunc(number / 100);
};
console.log(isSymmetricNumber(123));
