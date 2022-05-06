function distinct(a) {
  let b = [...new Set(a)];

  return b;
}

distinct([1, 1, 1, 1, 1, 2]);
