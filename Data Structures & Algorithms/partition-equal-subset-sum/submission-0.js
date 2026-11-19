class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        for (const x of nums) total += x;
        if (total % 2 !== 0) return false;

        const target = total / 2;
        const dp = new Array(target + 1).fill(false);
        dp[0] = true;

        for (const num of nums) {
            for (let s = target; s >= num; s--) {
                if (dp[s - num]) dp[s] = true;
            }
            if (dp[target]) return true; // early exit
        }

        return dp[target];
    }
}