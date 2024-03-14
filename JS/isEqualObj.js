// Kiểm tra 2 objects có bằng nhau không?
// Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về:

// true nếu số lượng keys của 2 objects bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh)

// ngược lại là false

// Ví dụ:

// isEqual({}, {}) --> true

// isEqual({ name: 'Bob' }, { name: 'Alice' }) --> false

// isEqual({ name: 'Bob' }, { name: 'Bob' }) --> true

// isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }) --> false

// Giả sử kiểu dữ liệu của các thuộc tính của cả 2 objects đều là kiểu dữ liệu primitive.
const isEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  return keys1.length === keys2.length && obj1[keys1] === obj2[keys2];
};
console.log(isEqual({}, {})); // true
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' })); // false
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' })); // true
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 })); // false
