const sumOfBinaryStrings = (s1, s2) => {
  let res = "";
  res = s1
    .split("")
    .map((char) => {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
  return res;
};

console.log("helo");
