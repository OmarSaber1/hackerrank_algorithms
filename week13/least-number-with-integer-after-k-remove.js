var findLeastNumOfUniqueInts = function (arr, k) {
  const numsFrequencyMap = {};
  let nonDistinct = [];
  let totalCount = 0;

  for (var i = 0; i < arr.length; i++) {
    numsFrequencyMap[arr[i]]
      ? numsFrequencyMap[arr[i]]++
      : (numsFrequencyMap[arr[i]] = 1);
  }

  for (var key in numsFrequencyMap) {
    if (numsFrequencyMap[key] == 1) {
      totalCount++;
    } else {
      nonDistinct.push(numsFrequencyMap[key]);
    }
  }

  nonDistinct.sort((a, b) => b - a);
  console.log(nonDistinct, totalCount);
  while (nonDistinct.length > 0 && k > 0) {
    const frequency = nonDistinct.pop();

    k -= frequency - 1;
    console.log(k);
    if (k >= 0) {
      totalCount++;
    }
  }

  if (k > 0) {
    totalCount -= k;
  }

  return totalCount;
};

console.log(findLeastNumOfUniqueInts([2, 4, 1, 8, 3, 5, 1, 3], 3));
