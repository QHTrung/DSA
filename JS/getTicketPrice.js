// Viết hàm lấy giá vé tương ứng theo số tuổi
// Khi khách hàng vào tham quan khu du lịch, tuỳ thuộc vào độ tuổi mà có giá vé khác nhau.
// Hãy viết một hàm nhận vào số tuổi của khách hàng, trả về giá vé tương ứng.
// Bảng giá như sau:
// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được FREE (trả về 0)
// Từ 6 - 12 tuổi giá vé là 20.000 VND
// Trên 12 tuổi thì đồng giá 50.000 VND

// Viết hàm function getTicketPrice(age)  để giúp mình lấy được giá tiền khi biết tuổi của khách hàng nhé.
// Trả về là một con số nguyên:
// -1 nếu dữ liệu không hợp lệ
// 0 nếu free
// các giá tiền nếu tuổi hợp lệ
// Giả sử người sống thọ nhất là 125 tuổi.
const getTicketPrice = (age) => {
  // check valid age
  if (age <= 0 || age > 125) return -1;
  if (age < 6 || age >= 70) return 0;
  if (age <= 12) return 20000;
  return 50000;
};
console.log(getTicketPrice(-1));
console.log(getTicketPrice(126));
console.log(getTicketPrice(22));
console.log(getTicketPrice(5));
console.log(getTicketPrice(9));
console.log(getTicketPrice(72));
