const backSpaceStringCompare = (s, t) => {
  const newS = [];
  const newT = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      newS.pop();
    } else {
      newS.push(s[i]);
    }
  }
  for (var i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      newT.pop();
    } else {
      newT.push(t[i]);
    }
  }

  return newS.join("") === newT.join("");
};

console.log(backSpaceStringCompare("a#c", "b"));
