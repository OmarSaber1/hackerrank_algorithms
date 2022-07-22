var addDigits = function (num) {
  num = "" + num;
  while (num.length > 1) {
    let value = 0;
    for (var i = 0; i < num.length; i++) {
      value += +num[i];
    }
    num = "" + value;
  }
  return num;
};

addDigits(38);
