const reverseInteger = (num) => {
  const stringNumber = ("" + num).split("");

  if (stringNumber[0] === "-") {
    stringNumber.splice(0, 1);
    stringNumber.push("-");
  }

  let maxNum = +stringNumber.reverse().join("");

  if (maxNum > Math.pow(2, 31) - 1 || maxNum < -Math.pow(2, 31)) return 0;

  return maxNum;
};

console.log(reverseInteger(Math.pow(2, 31)));
