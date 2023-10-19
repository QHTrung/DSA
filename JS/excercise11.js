// Tính tổng tiền giỏ hàng
// Viết hàm calcCartTotal(cartItemList) nhận vào danh sách các item trong giỏ hàng và trả về tổng tiền của giỏ hàng đó.
// Lưu ý
// cartItemList có thể không phải là mảng
// Trường hợp cartItemList là mảng, thì sẽ là mảng của các object cartItem
// Mỗi cartItem sẽ có 3 keys: id, product và quantity
// Ví dụ
// expect(calcCartTotal([])).toBe(0); // 0
// expect(calcCartTotal([])).toBe(); // 0
// // should return 500000 = 100000 * 4 + 50000 * 2
// calcCartTotal([
//     { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
//     { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
// ])
// Hãy thử dùng hàm reduce để cài đặt hàm này nhé!
function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length == 0) return 0;
  //   let sum = 0;
  //   for (let i = 0; i < cartItemList.length; i++) {
  //     const cartItem = cartItemList[i];
  //     sum += Number(cartItem.product.price * cartItem.quantity);
  //   }
  //   return sum;
  return cartItemList.reduce((sum, cartItem) => {
    return (sum += Number(cartItem.product.price * cartItem.quantity));
  }, 0);
}
console.log(
  calcCartTotal([
    { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
    { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
  ]),
);
