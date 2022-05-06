function killer(suspectInfo, dead) {
  let obj = {};
  let num = 0;
  for (const key in suspectInfo) {
    num = 0;
    for (let i = 0; i < suspectInfo[key].length; i++) {
      for (let j = 0; j < dead.length; j++) {
        if (suspectInfo[key][i] === dead[j]) {
          num = num + 1;
          obj[key] = num;
        }
      }
    }
  }
  const sortable = Object.fromEntries(
    Object.entries(obj).sort(([, a], [, b]) => b - a)
  );
  return Object.keys(sortable)[0];
}
console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
      Peter: ["Jacob", "Kyle", "Lucas"],
    },
    ["Lucas", "Bill"]
  )
);
