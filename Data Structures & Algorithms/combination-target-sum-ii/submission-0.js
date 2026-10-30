
class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const current = [];

        // Sort to make duplicate skipping and pruning possible
        candidates.sort((a, b) => a - b);

        const backtrack = (start, remaining) => {
            // Found a valid combination
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {

                // Skip duplicates at the same recursion level
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                // No need to explore larger numbers
                if (candidates[i] > remaining) {
                    break;
                }

                // Choose current element
                current.push(candidates[i]);

                // i + 1 because each element can be used only once
                backtrack(i + 1, remaining - candidates[i]);

                // Backtrack
                current.pop();
            }
        };

        backtrack(0, target);

        return result;
    }
}
