// Remove duplicated letters
// Viết hàm uniqueLetters(str) nhận vào là một chuỗi và trả về một chuỗi mới thoả điều kiện sau đây:

// Giữ lại những ký tự chỉ xuất hiện một lần

// Những ký tự xuất hiện từ 2 lần trở lên sẽ bị remove ra khỏi chuỗi

// Ví dụ:

// uniqueLetters('') --> ''

// uniqueLetters('abc') --> 'abc'

// uniqueLetters('easy frontend') --> 'asy frotd' (các ký tự e, n bị remove vì xuất hiện 2 lần)

// uniqueLetters('aabccddeff') --> 'be' (các ký tự a, c, d, f bị remove vì xuất hiện 2 lần)
function uniqueLetters(str) {
  if (typeof str !== 'string' || str.length === 0) return [];
  let newStr = '';
  const count = {};
  for (let idx = 0; idx < str.length; idx++) {
    const char = str[idx];
    count[char] = count[char] === undefined ? 1 : count[char] + 1;
  }
  for (const key in count) {
    if (count[key] < 2) {
      newStr += key;
    }
  }
  return newStr;
}
console.log(uniqueLetters(''));
console.log(uniqueLetters('abc'));
console.log(uniqueLetters('easy frontend'));
console.log(uniqueLetters('aabccddeff'));
