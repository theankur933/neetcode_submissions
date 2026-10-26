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
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) return [];

        const result = [];
        const queue = [root];
        let head = 0;

        while (head < queue.length) {
            const levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const node = queue[head++];

                // Last node of this level
                if (i === levelSize - 1) {
                    result.push(node.val);
                }

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
        }

        return result;
    }
}
