function multiplyAll(arr) {
  let b = [];
  return (a) => {
    for (let i = 0; i < arr.length; i++) {
      b.push(arr[i] * a);
    }
    return b;
  };
}
multiplyAll([1, 2, 3])(2);
