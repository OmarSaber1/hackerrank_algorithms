var nextGreatestLetter = function (letters, target) {
  return letters.find((letter) => letter > target) || letters[0];
};
