var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  let results = [1];

  for (var i = 1; i <= rowIndex; i++) {
    const oldArray = [1];

    for (var j = 0; j < i; j++) {
      oldArray[j] = (results[j - 1] || 0) + results[j];
    }

    oldArray[i] = 1;

    results = [...oldArray];
  }

  return results;
};
