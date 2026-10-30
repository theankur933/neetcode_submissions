
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        const backtrack = (start, remaining) => {
            // Found a valid combination
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                // Skip numbers that exceed the remaining target
                if (nums[i] > remaining) continue;

                // Choose the current number
                current.push(nums[i]);

                // i instead of i + 1 because reuse is allowed
                backtrack(i, remaining - nums[i]);

                // Undo the choice
                current.pop();
            }
        };

        backtrack(0, target);

        return result;
    }
}
