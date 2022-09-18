import { Interval } from "/opt/node/lib/lintcode/index.js";

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: the minimum number of conference rooms required
   */
  minMeetingRooms(intervals) {
    let start = [],
      end = [];

    for (var i = 0; i < intervals.length; i++) {
      start.push(intervals[i].start);
      end.push(intervals[i].end);
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let s = 0,
      e = 0,
      count = 0,
      res = 0;

    while (s < intervals.length) {
      if (start[s] < end[e]) {
        count++;
        s++;
      } else {
        count--;
        e++;
      }

      res = Math.max(count, res);
    }

    return res;
  }
}
