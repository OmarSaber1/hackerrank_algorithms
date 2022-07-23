var subtractProductAndSum = function (n) {
  let sum = 0,
    multi = 1;

  n = n.toString();

  for (var i = 0; i < n.length; i++) {
    sum += Number(n[i]);
    multi *= Number(n[i]);
  }

  return multi - sum;
};
