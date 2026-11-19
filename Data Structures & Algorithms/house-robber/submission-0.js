class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev2 = 0; // best up to house i-2
        let prev1 = 0; // best up to house i-1

        for (const money of nums) {
            const cur = Math.max(prev1, prev2 + money);
            prev2 = prev1;
            prev1 = cur;
        }

        return prev1;
    }
}