var calPoints = function (ops) {
  const sum = [];

  for (var i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      sum.pop();
    } else if (ops[i] === "D") {
      sum.push(sum[sum.length - 1] * 2);
    } else if (ops[i] === "+") {
      sum.push(sum[sum.length - 1] + (sum[sum.length - 2] || 0));
    } else {
      sum.push(+ops[i]);
    }
  }

  return sum.reduce((a, b) => a + b, 0);
};
