var runLengthEncoding = function (str) {
  let count = 1;
  let s = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      s.push([count, str[i]]);
      count = 1;
    }
  }
  return s;
};

console.log(runLengthEncoding("aaaab  c aaa ss"));
