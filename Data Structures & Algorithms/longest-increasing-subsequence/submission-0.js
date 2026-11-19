class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const tails = [];

        for (const num of nums) {
            let lo = 0, hi = tails.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (tails[mid] >= num) hi = mid;
                else lo = mid + 1;
            }
            tails[lo] = num; // lo === tails.length appends
        }

        return tails.length;
    }
}