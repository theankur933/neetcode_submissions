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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const n = intervals.length;
        if (n === 0) return 0;

        const starts = intervals.map(i => i.start).sort((a, b) => a - b);
        const ends = intervals.map(i => i.end).sort((a, b) => a - b);

        let rooms = 0;
        let maxRooms = 0;
        let e = 0;

        for (let s = 0; s < n; s++) {
            if (starts[s] < ends[e]) {
                // Starts before the earliest end, so a new room is needed
                rooms++;
            } else {
                // A meeting ended (touching at a point is fine), reuse its room
                e++;
            }
            maxRooms = Math.max(maxRooms, rooms);
        }

        return maxRooms;
    }
}