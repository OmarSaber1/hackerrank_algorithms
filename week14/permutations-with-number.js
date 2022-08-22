const find_letter_case_string_permutations = function (str) {
  permutations = [];
  // TODO: Write your code here
  permutations.push(str);
  for (var i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (isNaN(parseInt(currentChar, 10))) {
      const n = permutations.length;
      for (var j = 0; j < n; j++) {
        console.log(i, j, permutations);
        const splitedStr = permutations[j].split("");

        if (currentChar === currentChar.toUpperCase()) {
          splitedStr[i] = currentChar.toLowerCase();
        } else {
          splitedStr[i] = currentChar.toUpperCase();
        }

        permutations.push(splitedStr.join(""));
      }
    }
  }

  return permutations;
};

console.log(
  `String permutations are: ${find_letter_case_string_permutations("ad52")}`
);
