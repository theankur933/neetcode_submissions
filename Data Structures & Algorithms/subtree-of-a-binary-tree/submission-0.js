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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // An empty tree is a subtree of any tree
        if (subRoot === null) return true;

        // If root is empty but subRoot is not
        if (root === null) return false;

        // Check whether the trees match at this node
        if (this.isSameTree(root, subRoot)) {
            return true;
        }

        // Search in the left and right subtrees
        return this.isSubtree(root.left, subRoot) ||
               this.isSubtree(root.right, subRoot);
    }

    isSameTree(p, q) {
        // Both nodes are null
        if (p === null && q === null) return true;

        // One is null, or their values differ
        if (p === null || q === null || p.val !== q.val) {
            return false;
        }

        // Both left and right subtrees must match
        return this.isSameTree(p.left, q.left) &&
               this.isSameTree(p.right, q.right);
    }
}
