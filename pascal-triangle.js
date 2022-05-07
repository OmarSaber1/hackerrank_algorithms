const pascal = (rows) => {
  const pascalArray = [[1]];
  let oldArray = [1];

  for (let i = 1; i < rows; i++) {
    let newArray = [1];
    for (let j = 0; j < i - 1; j++) {
      newArray.push((oldArray[j] ?? 0) + (oldArray[j + 1] ?? 0));
    }
    newArray.push(1);
    oldArray = [...newArray];
    pascalArray.push(newArray);
    newArray = [1];
  }
  console.log(pascalArray);
};

pascal(6);
