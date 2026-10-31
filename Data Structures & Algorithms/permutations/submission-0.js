class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const current = [];
        const used = new Array(nums.length).fill(false);

        const backtrack = () => {
            if (current.length === nums.length) {
                result.push([...current]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;
                used[i] = true;
                current.push(nums[i]);
                backtrack();
                current.pop();
                used[i] = false;
            }
        };

        backtrack();
        return result;
    }
}