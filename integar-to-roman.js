var intToRoman = function (number) {
  const data = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  if (data.has(number)) return data.get(number);

  let symbol = "";
  //   2994

  for (var [key, value] of data) {
    //   994
    if (number < key) continue;
    let reminder = number % key;
    //   2
    let count = Math.floor(number / key);

    for (let i = 0; i < count; i++) {
      symbol += value;
    }

    if (!reminder) break;
    number = reminder;
  }
  return symbol;
};

console.log(intToRoman(1001));
console.log(intToRoman(1994));
