function newCounter() {
  let dem = 0;
  function count() {
    dem++;
    return dem;
  }
  return { count };
}
let c1 = newCounter();
console.log(c1.count()); //1
console.log(c1.count()); //2
console.log(c1.count()); //3

let c2 = newCounter();
console.log(c2.count()); //1
console.log(c2.count()); //2
console.log(c2.count()); //3
