function squareDigits(num) {
  const a = num.toString().split("");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i] * a[i]);
  }
  return parseInt(b.join(""));
}

console.log(squareDigits(3214));
