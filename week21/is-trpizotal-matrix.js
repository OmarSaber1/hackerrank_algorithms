/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let rows = matrix.length, // 3
    cols = matrix[0].length; //4

  for (var i = 1; i < rows; i++) {
    for (var j = 1; j < cols; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
    }
  }

  return true;
};

/*  const m = matrix.length;
    const n = matrix[0].length;
    
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] != matrix[i - 1][j - 1]) return false;
        }     
    }
	
    return true;
    */
