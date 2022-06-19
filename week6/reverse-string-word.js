var reverseWords = function (s) {
  const splitedArray = s.split(" ");

  for (var i = 0; i < splitedArray.length; i++) {
    splitedArray[i] = splitedArray[i].split("").reverse().join("");
  }

  return splitedArray.join(" ");
};
