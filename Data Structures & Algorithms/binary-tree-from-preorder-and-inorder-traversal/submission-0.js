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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const indexMap = new Map();

        // Store each value's index in inorder for fast lookup.
        for (let i = 0; i < inorder.length; i++) {
            indexMap.set(inorder[i], i);
        }

        let preIndex = 0;

        const build = (left, right) => {
            if (left > right) {
                return null;
            }

            // First preorder element is the root.
            const rootVal = preorder[preIndex++];
            const root = new TreeNode(rootVal);

            // Find the root's position in inorder.
            const mid = indexMap.get(rootVal);

            // Build left and right subtrees.
            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}
