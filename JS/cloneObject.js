// Viết hàm clone object nhưng không dùng spread operator
// Viết hàm function cloneObject(obj) để clone một object obj truyền vào,
// và trả về là một object mới có đầy đủ các keys của object truyền vào.

// Ví dụ:
// const studentA = { name: 'Bob', math: 9 };
// const studentB = cloneObject(studentA);
// console.log(studentA === studentB); // should be false
// console.log(studentB.name); // Bob
// console.log(studentB.math); // 9

const cloneObject = (obj) => {
  let keys = Object.keys(obj);
  let result = {};
  for (let key of keys) {
    result[key] = obj[key];
  }
  return result;
};
const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);
// const studentB = { ...studentA }; // using spread operator
console.log(studentA === studentB); // should be false
console.log(studentB.name); // Bob
console.log(studentB.math); // 9
