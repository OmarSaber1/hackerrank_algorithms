const longest_substring_with_k_distinct = function (str, k) {
  // TODO: Write your code here

  let left = 0;
  let right = 0;
  let max = 0;
  const obj = {};

  // String="cbbebi", K=3

  while (right < str.length) {
    if (!obj[str[right]]) {
      obj[str[right]] = 1;
    } else {
      obj[str[right]]++;
    }

    while (Object.keys(obj).length > k) {
      console.log(obj, obj[str[left]]);
      if (obj[str[left]]) obj[str[left]]--;
      if (obj[str[left]] == 0) delete obj[str[left]];
      left++;
    }
    console.log(obj, max);
    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};

longest_substring_with_k_distinct("cbbebi", 3);
