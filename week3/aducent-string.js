const x = (s1, s2) => {
  const split1 = s1.split("");
  const split2 = s2.split("");

  const obj1 = split1.reduce((a, b) => {
    return { ...a, [b]: (a[b] || 0) + 1 };
  }, {});

  const obj2 = split2.reduce((a, b) => {
    return { ...a, [b]: (a[b] || 0) + 1 };
  }, {});

  let counter = 0;

  for (const key in obj1) {
    console.log(counter, obj1[key], obj2[key]);
    counter += Math.abs((obj1[key] ?? 0) - (obj2[key] ?? 0));
    if (counter === 1) return true;
  }

  return false;
};

console.log(x("tangram", "anagram"));
