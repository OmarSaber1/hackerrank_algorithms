const numbersToLetters = (arr = "") => {
  if (arr === "") return [];
  const lettersPerNumber = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (arr.length === 1) return lettersPerNumber[arr].split("");

  let maxLength = 3;

  if (
    lettersPerNumber[arr[arr.length - 1]].includes("p") ||
    lettersPerNumber[arr[arr.length - 1]].includes("w")
  )
    maxLength = 4;

  const returnedArray = [];
  let concatString = "";
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    concatString += lettersPerNumber[arr[i]];
  }

  for (let i = 0; i < concatString.length - maxLength; i++) {
    for (let j = 3; j < concatString.length; j++) {
      returnedArray.push(concatString[i] + concatString[j]);
      count++;
    }
  }

  return returnedArray;
};

console.log(numbersToLetters("2"));
