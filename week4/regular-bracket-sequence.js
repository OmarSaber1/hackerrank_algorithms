const regularBracketSequence = (Str) => {
  if (Str.length % 2) return false;

  const stack = [];

  for (let i = 0; i < Str.length; i++) {
    if (Str[i] === "(" || Str[i] === "[" || Str[i] === "{") {
      stack.push(Str[i]);
    } else {
      const popedElement = stack.pop();
      if (
        !(
          (popedElement === "(" && Str[i] === ")") ||
          (popedElement === "{" && Str[i] === "}") ||
          (popedElement === "[" && Str[i] === "]")
        )
      ) {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

console.log(regularBracketSequence("[()(}]"));
