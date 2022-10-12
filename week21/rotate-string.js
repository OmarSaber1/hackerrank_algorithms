/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === B) return true;

  for (let char of A) {
    A = A.slice(1) + A.slice(0, 1); //rotating the string
    console.log(A);
    if (A === B) return true;
  }

  return false;
  return s.length === goal.length && s.repeat(2).includes(goal);
};

rotateString("abcde", "cdeab");
