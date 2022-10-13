/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function ([x1, y1, x2, y2], [x3, y3, x4, y4]) {
  return x1 < x4 && y1 < y4 && x2 > x3 && y2 > y3;
};
