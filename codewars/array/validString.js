var validWord = function (dictionary, word) {
  d = dictionary.sort((a, b) => a.length - b.length);
  for (let i = 0; i < d.length; i++) {
    word = word.replace(new RegExp(d[i], "g"), "");
  }
  return !word.length;
};
console.log(
  validWord(["fepd", "fe", "dk", "k", "kd", "d", "d"], "fepdfedkkkddd")
);
