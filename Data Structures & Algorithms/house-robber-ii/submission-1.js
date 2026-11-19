class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 1) return nums[0];

        const robLinear = (start, end) => {
            let prev2 = 0;
            let prev1 = 0;
            for (let i = start; i <= end; i++) {
                const cur = Math.max(prev1, prev2 + nums[i]);
                prev2 = prev1;
                prev1 = cur;
            }
            return prev1;
        };

        return Math.max(robLinear(0, n - 2), robLinear(1, n - 1));
    }
}