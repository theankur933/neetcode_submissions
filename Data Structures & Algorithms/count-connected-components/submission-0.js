
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // Build adjacency list
        let graph = Array.from({ length: n }, () => []);

        for (let [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        let visited = new Set();
        let count = 0;

        const dfs = (node) => {
            visited.add(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        // Visit every unvisited node
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                dfs(i);
            }
        }

        return count;
    }
}
