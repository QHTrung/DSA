// Bài toán đổi tiền ATM đơn giản
// Viết hàm withdraw(amount) để giúp máy ATM biết trả ra bao nhiêu tờ tiền của các mệnh giá khác nhau.

// Giả sử máy ATM đang có 2 tờ 500k, 5 tờ 200k, 10 tờ 100k và 100 tờ 50k. (tổng tiền là 8 triệu đồng)

// Viết hàm nhận vào số tiền, trả về object với định dạng như sau:

// {
//   k500: a,
//   k200: b,
//   k100: c,
//   k50: d,
// }
// Trong đó a, b, c, d lần lượt là số lượng tờ tiền tương ứng đổi được.

// Lưu ý: ưu tiền đổi tiền lớn trước, khi hết tiền lớn mới dùng tiền nhỏ.

// Trường hợp máy ATM không đủ tiền, thì trả về chuỗi 'Insufficient balance from ATM'

// Số tiền nhận vào phải là bội số của 50.000đ, nếu sai thì trả về chuỗi 'Invalid balance'

// Ví dụ:

// withdraw(850000) --> { k500: 1, k200: 1, k100: 1, k50: 1 }

// withdraw(200000) --> { k500: 0, k200: 1, k100: 0, k50: 0}

// withdraw(125000) --> 'Invalid balance'

// withdraw(9000000) --> 'Insufficient balance from ATM'
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
  // your code here
  if (amount < BASE_UNIT || amount % BASE_UNIT !== 0) return 'Invalid balance';
  const total =
    K500_QUANTITY * K500_VALUE +
    K200_QUANTITY * K200_VALUE +
    K100_QUANTITY * K100_VALUE +
    K50_QUANTITY * K50_VALUE;
  let temp = amount;
  if (temp > total) return 'Insufficient balance from ATM';
  let k500 =
    temp > K500_QUANTITY * K500_VALUE
      ? K500_QUANTITY
      : Math.trunc(temp / K500_VALUE);
  temp -= k500 * K500_VALUE;
  let k200 =
    temp > K200_QUANTITY * K200_VALUE
      ? K200_QUANTITY
      : Math.trunc(temp / K200_VALUE);
  temp -= k200 * K200_VALUE;
  let k100 =
    temp > K100_QUANTITY * K100_VALUE
      ? K100_QUANTITY
      : Math.trunc(temp / K100_VALUE);
  temp -= k100 * K100_VALUE;
  let k50 = temp / K50_VALUE;
  return {
    k500,
    k200,
    k100,
    k50,
  };
}

console.log(withdraw(1050000));
console.log(withdraw(200000));
console.log(withdraw(125000));
console.log(withdraw(9000000));
