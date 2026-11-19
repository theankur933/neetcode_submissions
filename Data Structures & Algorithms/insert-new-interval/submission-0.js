class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        const n = intervals.length;
        let i = 0;
        let [start, end] = newInterval;

        // 1. Intervals that end strictly before the new one starts
        while (i < n && intervals[i][1] < start) {
            result.push(intervals[i]);
            i++;
        }

        // 2. Intervals that overlap with the new one: merge them
        while (i < n && intervals[i][0] <= end) {
            start = Math.min(start, intervals[i][0]);
            end = Math.max(end, intervals[i][1]);
            i++;
        }
        result.push([start, end]);

        // 3. Intervals that start after the merged interval ends
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}