function fizzbuzz(n) {
  let b = [];
  for (let i = 1; i <= n; i++) {
    b.push(i);
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] % 3 === 0 && b[i] % 5 === 0) {
      b.splice(i, 1, "FizzBuzz");
    } else {
      if (b[i] % 3 === 0) {
        b.splice(i, 1, "Fizz");
      }
      if (b[i] % 5 === 0) {
        b.splice(i, 1, "Buzz");
      }
    }
  }
  console.log(b);
}
fizzbuzz(15);
