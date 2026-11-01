class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const path = [];

        const backtrack = (start) => {
            res.push([...path]);

            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;
                path.push(nums[i]);
                backtrack(i + 1);
                path.pop();
            }
        };

        backtrack(0);
        return res;
    }
}