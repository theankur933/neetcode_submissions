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
    goodNodes(root) {
        let count = 0;

        const dfs = (node, maxSoFar) => {
            if (node === null) return;

            if (node.val >= maxSoFar) {
                count++;
            }

            maxSoFar = Math.max(maxSoFar, node.val);

            dfs(node.left, maxSoFar);
            dfs(node.right, maxSoFar);
        };

        dfs(root, -Infinity);

        return count;
    }
}
