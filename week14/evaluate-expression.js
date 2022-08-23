const diff_ways_to_evaluate_expression = function (input) {
  const result = [];
  // TODO: Write your code here

  if (!input.includes("+") && !input.includes("*") && !input.includes("-")) {
    result.push(parseInt(input));
  } else {
    for (var i = 0; i < input.length; i++) {
      const char = input[i];

      if (isNaN(parseInt(char, 10))) {
        const leftPart = diff_ways_to_evaluate_expression(
          input.substring(0, i)
        );
        const rightPart = diff_ways_to_evaluate_expression(
          input.substring(i + 1)
        );

        for (var l = 0; l < leftPart.length; l++) {
          for (var r = 0; r < rightPart.length; r++) {
            if (char == "+") {
              result.push(leftPart[l] + rightPart[r]);
            } else if (char == "*") {
              result.push(leftPart[l] * rightPart[r]);
            } else if (char == "-") {
              result.push(leftPart[l] - rightPart[r]);
            }
          }
        }
      }
    }
  }
  return result;
};

console.log(
  `Expression evaluations: ${diff_ways_to_evaluate_expression("1+2*3")}`
);
