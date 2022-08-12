const intervalIntersection = function (arr1, arr2) {
  let result = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    let arr1IntersectArr2 =
      arr1[i][0] <= arr2[j][0] && arr2[j][0] <= arr1[i][1];

    let arr2IntersectArr1 =
      arr2[j][0] <= arr1[i][0] && arr1[i][0] <= arr2[j][1];

    if (arr1IntersectArr2 || arr2IntersectArr1) {
      result.push([
        Math.max(arr1[i][0], arr2[j][0]),
        Math.min(arr1[i][1], arr2[j][1]),
      ]);
    }

    if (arr1[i][1] < arr2[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};
