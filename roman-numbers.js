var romanToInt = function (s) {
  const symbolToNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const differencePatterns = ["IV", "IX", "XL", "XC", "CD", "CM"];

  let number = 0;

  const splittedRomanSymbols = s.split("");

  for (let i = 0; i < splittedRomanSymbols.length; i++) {
    let currentSymbol = splittedRomanSymbols[i];
    let nextSymbol = splittedRomanSymbols[i + 1];

    if (differencePatterns.includes(currentSymbol + nextSymbol)) {
      number += symbolToNumber[nextSymbol] - symbolToNumber[currentSymbol];
      i++;
      continue;
    }
    number += symbolToNumber[currentSymbol];
  }
  return number;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MCMXC"));
console.log(romanToInt("LVIII"));
