var fairCandySwap = function (aliceSizes, bobSizes) {
  let sumA = aliceSizes.reduce((prev, current) => prev + current, 0);
  let sumB = bobSizes.reduce((prev, current) => prev + current, 0);

  const diff = (sumB - sumA) / 2;

  const setB = new Set(bobSizes);

  for (var i = 0; i < aliceSizes.length; i++) {
    console.log(setB.has(2), diff, sumA, sumB);
    if (setB.has(diff + aliceSizes[i]))
      return [aliceSizes[i], aliceSizes[i] + diff];
  }
};
