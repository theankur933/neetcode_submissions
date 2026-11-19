/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // Sort by start time ascending
        intervals.sort((a, b) => a.start - b.start);

        for (let i = 1; i < intervals.length; i++) {
            // Next meeting starts before the previous one ends
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }

        return true;
    }
}