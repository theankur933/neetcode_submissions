class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const counts = new Array(26).fill(0);
        for (const t of tasks) {
            counts[t.charCodeAt(0) - 65]++;
        }

        const maxFreq = Math.max(...counts);
        let maxCount = 0;
        for (const c of counts) {
            if (c === maxFreq) maxCount++;
        }

        const slots = (maxFreq - 1) * (n + 1) + maxCount;
        return Math.max(tasks.length, slots);
    }
}