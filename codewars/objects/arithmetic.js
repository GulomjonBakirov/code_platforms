function arithmetic(a, b, operator) {
  // let opt = {
  //   add: "+",
  //   substract: "-",
  //   divide: "/",
  //   multiply: "*",
  // };

  // for (let key in opt) {
  //   if (key === operator) {

  //   }
  // }
  console.log(operator);
  switch (operator) {
    case "add":
      return a + b;
      break;
    case "substract":
      return a - b;
      break;
    case "multiply":
      return a * b;
      break;
    case "divide":
      return a / b;
      break;
    default:
      break;
  }
}
console.log(arithmetic(8, 2, "substract"));
