var detectCapitalUse = function (word) {
  if (word === word.toUpperCase()) return true;

  if (word === word.toLowerCase()) return true;

  const firstLetter = word.slice(0, 1);
  const restOfLetters = word.slice(1);

  if (
    firstLetter === word[0].toUpperCase() &&
    restOfLetters === restOfLetters.toLowerCase()
  )
    return true;

  return false;
};
