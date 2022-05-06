function maxPossibleScore(obj, arr) {
  let newArr = arr.map(String);
  let sum = 0;

  for (key in obj) {
    if (newArr.includes(key)) {
      obj[key] = obj[key] * 2;
      sum += obj[key];
    } else {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(maxPossibleScore({ a: 1, b: 2, c: 4 }, ["a", "b", "c"]));
