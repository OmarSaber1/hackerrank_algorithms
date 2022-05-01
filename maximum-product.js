const getMaximumProduct = (products) => {
  const uniqueSortedArray = products.sort((a, b) => b - a);

  return (uniqueSortedArray[0] - 1) * (uniqueSortedArray[1] - 1);
};

console.log(getMaximumProduct([10, 2, 5, 2]));
