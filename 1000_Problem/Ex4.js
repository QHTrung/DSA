// Bài 112: Viết chương trình in ra hình chữ nhật có kích thước m x n

// Hình chữ nhật đặc
// Hình chữ nhật rỗng

// 3x3
// 0,0  0,1  0,2
// 1,0  1,1  1,2
// 2,0  2,1  2,2

let row = 3;
let col = 3;
const drawSolidRectangle = (row, col) => {
  let str = '';
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      str += `${i},${j} `;
    }
    str += '\n';
  }
  return str;
};
const drawHallowRectangle = (row, col) => {
  let str = '';
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 || i == row - 1 || j == 0 || j == col - 1) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }
  return str;
};
console.log(drawSolidRectangle(row, col));
console.log(drawHallowRectangle(row, col));
