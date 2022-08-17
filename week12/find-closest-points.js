class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get_point() {
    return "[" + this.x + ", " + this.y + "] ";
  }
}

const find_closest_points = function (points, k) {
  result = points.slice(0, k);
  // TODO: Write your code here

  result.sort((a, b) => a.x * a.x - a.b * a.b);
  console.log(result);
  return result;
};

points = find_closest_points(
  [new Point(1, 3), new Point(3, 4), new Point(2, -1)],
  2
);
result = "Here are the k points closest the origin: ";
for (i = 0; i < points.length; i++) result += points[i].get_point();
console.log(result);
