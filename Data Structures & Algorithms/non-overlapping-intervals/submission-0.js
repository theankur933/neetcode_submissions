class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length === 0) return 0;

        // Sort by end time ascending
        intervals.sort((a, b) => a[1] - b[1]);

        let removed = 0;
        let lastEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < lastEnd) {
                // Overlaps with the last kept interval, so remove it
                removed++;
            } else {
                // No overlap (touching at a point is fine), keep it
                lastEnd = intervals[i][1];
            }
        }

        return removed;
    }
}