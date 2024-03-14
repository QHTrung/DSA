// Kiểm tra URL có sử dụng phương thức bảo mật
// Viết hàm isSecureUrl(url) nhận vào là một url và trả về true nếu url có sử dụng phương thức bảo mật, ngược lại trả về false.

// Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:

// https

// wss

// Tạm thời bỏ qua việc kiểm tra url có hoàn chỉnh hay không, chỉ quan tâm phương thức bảo mật.

// Ví dụ:

// isSecureUrl('http://abc.com') --> false vì bắt đầu bằng http, ko phải là https

// isSecureUrl('https://ezfrontend.com') --> true

// isSecureUrl('wss://chat.ezfrontend.com') --> true

// isSecureUrl('ws://chat.abc.com') --> false

// Viết bằng 2 hướng tiếp cận khác nhau:

// isSecureUrlV1(url) Sử dụng indexOf()

// isSecureUrlV2(url) Sử dụng startsWith()

function isSecureUrl(url) {
  // using indexOf
  // return url.indexOf('https') !== -1 || url.indexOf('wss') !== -1;
  // using startsWith
  return url.startsWith('https') || url.startsWith('wss');
}

console.log(isSecureUrl('http://abc.com'));
console.log(isSecureUrl('https://ezfrontend.com'));
console.log(isSecureUrl('wss://chat.ezfrontend.com'));
console.log(isSecureUrl('ws://chat.abc.com'));