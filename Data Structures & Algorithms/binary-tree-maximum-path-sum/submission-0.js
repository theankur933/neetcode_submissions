/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */


class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity;

        const dfs = (node) => {
            if (node === null) {
                return 0;
            }

            // Ignore negative contributions from subtrees.
            const leftGain = Math.max(0, dfs(node.left));
            const rightGain = Math.max(0, dfs(node.right));

            // Maximum path passing through this node.
            const currentSum = node.val + leftGain + rightGain;

            maxSum = Math.max(maxSum, currentSum);

            // Return the maximum one-sided path to the parent.
            return node.val + Math.max(leftGain, rightGain);
        };

        dfs(root);
        return maxSum;
    }
}
