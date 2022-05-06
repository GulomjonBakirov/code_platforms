function count(string) {
  let arr = string.toString().split("");
  const obj = arr.reduce((acc, num) => {
    if (acc[num]) {
      acc[num] = acc[num] + 1;
    } else {
      acc[num] = 1;
    }
    return acc;
  }, {});
  return obj;
}
console.log(count(112));
