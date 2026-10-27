
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

class Codec {
    /**
     * Encodes a tree to a single string.
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const result = [];

        const dfs = (node) => {
            if (node === null) {
                result.push("null");
                return;
            }

            result.push(String(node.val));
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);
        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(",");
        let index = 0;

        const dfs = () => {
            if (values[index] === "null") {
                index++;
                return null;
            }

            const node = new TreeNode(Number(values[index]));
            index++;

            node.left = dfs();
            node.right = dfs();

            return node;
        };

        return dfs();
    }
}
