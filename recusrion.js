const recusrion = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  console.log(n);
  return recusrion(n - 1) + recusrion(n - 2);
};

console.log(recusrion(4));
