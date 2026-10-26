
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        while (root !== null) {
            if (p.val < root.val && q.val < root.val) {
                // Both nodes are in the left subtree
                root = root.left;
            } else if (p.val > root.val && q.val > root.val) {
                // Both nodes are in the right subtree
                root = root.right;
            } else {
                // Nodes split across subtrees, or root is p or q
                return root;
            }
        }

        return null;
    }
}