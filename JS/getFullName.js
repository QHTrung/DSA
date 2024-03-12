// Trả về full name khi biết first và last name
// Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName.

// Quy tắc để tạo chuỗi fullName như sau:

// firstName và lastName là optional (có thể không có)

// fullName không có khoảng trắng thừa ở đầu và cuối chuỗi

// firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường

// Ví dụ:

// getFullName('Alice') --> 'Alice'

// getFullName('Alice', '') --> 'Alice'

// getFullName('', 'Nguyen') --> 'Nguyen'

// getFullName('Bob', 'Tran') --> 'Bob Tran'

// getFullName('john', 'pHAm') --> 'John Pham'

function capitalize(str) {
  const trimStr = (str || '').trim();
  return trimStr.charAt(0).toUpperCase() + trimStr.slice(1).toLowerCase();
}
function getFullName(firstName, lastName) {
  return `${capitalize(firstName)} ${capitalize(lastName)}`.trim();
}
console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bob', 'Tran'));
console.log(getFullName('john', 'pHAm'));
