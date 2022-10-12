var largestTriangleArea = function (points) {
  let maxArea = 0,
    n = points.length;

  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      for (var k = j + 1; k < n; k++) {
        let area = calcArea(points[i], points[j], points[k]);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

function calcArea(coordA, coordB, coordC) {
  const [xCoordA, yCoordA] = coordA;
  const [xCoordB, yCoordB] = coordB;
  const [xCoordC, yCoordC] = coordC;

  const sideA = xCoordA * (yCoordB - yCoordC);
  const sideB = xCoordB * (yCoordC - yCoordA);
  const sideC = xCoordC * (yCoordA - yCoordB);

  return Math.abs((sideA + sideB + sideC) / 2);
}
