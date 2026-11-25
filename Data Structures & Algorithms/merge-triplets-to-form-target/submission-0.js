class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const found = [false, false, false];

        for (const t of triplets) {
            // Skip triplets that would overshoot the target
            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
                continue;
            }
            for (let i = 0; i < 3; i++) {
                if (t[i] === target[i]) found[i] = true;
            }
        }

        return found[0] && found[1] && found[2];
    }
}