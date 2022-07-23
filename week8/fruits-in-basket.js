var totalFruit = function (fruits) {
  const obj = {};
  let max = 0;
  let left = 0;

  for (var i = 0; i < fruits.length; i++) {
    !obj[fruits[i]] ? (obj[fruits[i]] = 1) : obj[fruits[i]]++;

    while (Object.keys(obj).length > 2) {
      obj[fruits[left]]--;
      if (!obj[fruits[left]]) delete obj[fruits[left]];
      left++;
    }

    max = Math.max(max, i - left + 1);
  }

  return max;
};
