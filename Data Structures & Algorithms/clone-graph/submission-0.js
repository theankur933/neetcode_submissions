/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const copies = new Map();

        const dfs = (cur) => {
            if (copies.has(cur)) return copies.get(cur);

            const copy = new Node(cur.val);
            copies.set(cur, copy);

            for (const nei of cur.neighbors) {
                copy.neighbors.push(dfs(nei));
            }

            return copy;
        };

        return dfs(node);
    }
}