class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const current = [];

        const backtrack = (start) => {
            // Every current combination is a valid subset.
            result.push([...current]);

            for (let i = start; i < nums.length; i++) {
                // Include nums[i]
                current.push(nums[i]);

                // Explore further combinations
                backtrack(i + 1);

                // Backtrack: remove the last element
                current.pop();
            }
        };

        backtrack(0);

        return result;
    }
}