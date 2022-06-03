const isBeautiful = (Str) => {
  const sortedArrayOfString = Str.split("").sort();
  const obj = {};
  const alphabetsArray = "abcdefghijklmnopqrstuvwxyz".split("");
  let alphabetsIndex = 0;
  let maxRepeated = Infinity;

  for (let i = 0; i < sortedArrayOfString.length; i++) {
    obj[sortedArrayOfString[i]]
      ? obj[sortedArrayOfString[i]]++
      : (obj[sortedArrayOfString[i]] = 1);
  }

  console.log(obj);
  for (const key in obj) {
    if (key !== alphabetsArray[alphabetsIndex] || obj[key] > maxRepeated) {
      return false;
    }

    alphabetsIndex++;
    maxRepeated = obj[key];
  }

  return true;
};

console.log(isBeautiful("bbc"));
