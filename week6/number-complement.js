var findComplement = function (num) {
  const binaryArray = num.toString(2).split("");

  for (var i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] == 0) {
      binaryArray[i] = 1;
    } else {
      binaryArray[i] = 0;
    }
  }

  return parseInt(binaryArray.join(""), 2);
};
