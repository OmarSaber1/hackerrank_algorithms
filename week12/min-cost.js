const min_cost = (arr) => {
  let res = 0;

  while (arr.length > 1) {
    const temp = arr.pop() + arr.pop();
    res += temp;
    arr.push(temp);
    arr.sort((a, b) => b - a);
  }
};

min_cost([3, 4, 5, 6]);
