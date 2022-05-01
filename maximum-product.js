const getMaximumProduct = (products) => {
  let maximumProducts = 0;

  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      let maxDifference = (products[j] - 1) * (products[i] - 1);
      if (maxDifference > maximumProducts) maximumProducts = maxDifference;
    }
  }

  return maximumProducts;
};

console.log(getMaximumProduct([7]));
