function validPranthses(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentPrath = str[i];

    if (currentPrath === "(" || currentPrath === "{" || currentPrath === "[") {
      stack.push(currentPrath);
    } else {
      if (!stack.length) return false;
      const prevPrath = stack.pop();
      if (
        !(
          (currentPrath == ")" && prevPrath == "(") ||
          (currentPrath == "}" && prevPrath == "{") ||
          (currentPrath == "]" && prevPrath == "[")
        )
      ) {
        return false;
      }
    }
  }

  return true;
}

console.log(validPranthses("(){}]"));
console.log(validPranthses("()("));
console.log(validPranthses("(()){}"));
console.log(validPranthses("}()"));
