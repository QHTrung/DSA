// Truy tìm mật mã
// Viết hàm findSecret(code) để tìm ra chuỗi mật mã với quy tắc như sau.

// Bỏ đi các ký tự HOA trong code, chuỗi còn lại chính là mật mã cần tìm.

// Lưu ý: không dùng hàm replaceAll() và không dùng regular expression (regexp)

// Ví dụ:

// findSecret('SUPERCODE') --> ''

// findSecret('SUPERhelloCODE') --> 'hello'

// findSecret('eaABFHsyUEYSJfrontJSKJSHend') --> 'easyfrontend'

const findSecret = (code) => {
  return code
    .split('')
    .filter((char) => char !== char.toUpperCase())
    .join('');
};
console.log(findSecret('SUPERCODE'));
console.log(findSecret('SUPERhelloCODE'));
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));
