const firstRecurring = (Str) => {
  const hash = {};

  for (let i = 0; i < Str.length; i++) {
    if (hash[Str[i]]) {
      return Str[i];
    } else {
      hash[Str[i]] = 1;
    }
  }

  console.log(hash);
};

console.log(firstRecurring("DBCABA"));
