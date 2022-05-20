const reverseString = (Str) => {
  const arr = Str.split(" ").reverse().join(" ");

  return arr;
};

console.log(reverseString("Man Bites Dog"));
