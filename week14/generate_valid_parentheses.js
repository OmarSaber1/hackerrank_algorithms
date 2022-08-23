class PranthesesString {
  constructor(str, openCount, closedCount) {
    this.str = str;
    this.openCount = openCount;
    this.closedCount = closedCount;
  }
}

const generate_valid_parentheses = function (num) {
  result = [];
  // TODO: Write your code here

  const queue = [new PranthesesString("", 0, 0)];

  while (queue.length > 0) {
    const prths = queue.shift();

    if (prths.openCount === num && prths.closedCount === num) {
      result.push(prths.str);
    } else {
      if (prths.openCount < num) {
        queue.push(
          new PranthesesString(
            `${prths.str}(`,
            prths.openCount + 1,
            prths.closedCount
          )
        );
      }
      if (prths.openCount > prths.closedCount) {
        queue.push(
          new PranthesesString(
            `${prths.str})`,
            prths.openCount,
            prths.closedCount + 1
          )
        );
      }
    }
  }
  return result;
};

console.log(
  `All combinations of balanced parentheses are: ${generate_valid_parentheses(
    2
  )}`
);
console.log(
  `All combinations of balanced parentheses are: ${generate_valid_parentheses(
    3
  )}`
);
