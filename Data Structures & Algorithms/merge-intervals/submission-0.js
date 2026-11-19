class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // Sort by start time (copy so the input isn't mutated)
        const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

        const result = [sorted[0].slice()];

        for (let i = 1; i < sorted.length; i++) {
            const last = result[result.length - 1];
            const [start, end] = sorted[i];

            if (start <= last[1]) {
                // Overlaps (or touches): extend the last interval
                last[1] = Math.max(last[1], end);
            } else {
                // No overlap: begin a new interval
                result.push([start, end]);
            }
        }

        return result;
    }
}