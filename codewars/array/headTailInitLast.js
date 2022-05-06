function head(arr) {
  return arr[0];
}
function tail(arr) {
  arr.shift();
  arr.shift();
  return arr;
}
function init(arr) {
  return arr.pop();
}
function last(arr) {
  const i = arr.length;
  return arr[i - 1];
}
console.log(last([1, 2, 4]));
