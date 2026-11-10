
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // A tree with n nodes must have n - 1 edges
        if (edges.length !== n - 1) {
            return false;
        }

        // Build adjacency list
        let graph = Array.from({ length: n }, () => []);

        for (let [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        let visited = new Set();

        // DFS
        const dfs = (node) => {
            visited.add(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        dfs(0);

        // All nodes must be visited
        return visited.size === n;
    }
}
