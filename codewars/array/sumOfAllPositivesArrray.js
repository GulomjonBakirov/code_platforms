function positiveSum(arr) {
  arr = arr.filter((i) => i > 0);
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    b = b + arr[i];
  }
  return b;
}

positiveSum([1, -2, 3, 4, 5]);
