const sqrt = (num) => {
  let current = 0;
  while (current * current <= num) {
    console.log(current);

    current++;
  }

  return current - 1;
};

console.log(sqrt(1));
