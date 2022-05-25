const removeDuplicate = (Str) => {
  const stack = [];

  for (let i = 0; i < Str.length; i++) {
    if (Str[i] !== stack[stack.length - 1]) {
      stack.push(Str[i]);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
  console.log(stack);
};

console.log(removeDuplicate("abbaca"));
