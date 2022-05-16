function convertBinaryToNumber(num) {
  const reversedArray = num.toString(2).split("").reverse();

  const lengthToAdd = 32 - reversedArray.length;

  for (let i = 0; i < lengthToAdd; i++) {
    reversedArray.push("0");
  }

  return parseInt(reversedArray.join(""), 2);
}

console.log(convertBinaryToNumber(3221225471));
