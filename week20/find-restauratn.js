var findRestaurant = function (list1, list2) {
  let min = Infinity,
    res = [];

  for (var i = 0; i < list1.length; i++) {
    const word = list1[i];

    const idx = list2.indexOf(word);

    if (idx !== -1 && i + idx < min) {
      res = [word];
      min = i + idx;
    } else if (idx !== -1 && i + idx == min) {
      res.push(word);
    }
  }

  return res;
};
