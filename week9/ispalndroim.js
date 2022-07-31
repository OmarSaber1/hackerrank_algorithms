var isPalindrome = function (s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9$]/gi, "");
  const reveredCleaned = cleaned.split("").reverse().join("");

  return cleaned === reveredCleaned;
};
