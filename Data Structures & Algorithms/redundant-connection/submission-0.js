
class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;

        let parent = Array.from({ length: n + 1 }, (_, i) => i);
        let rank = Array(n + 1).fill(0);

        // Find with Path Compression
        const find = (x) => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };

        // Union by Rank
        const union = (a, b) => {
            let rootA = find(a);
            let rootB = find(b);

            // Already connected means cycle found
            if (rootA === rootB) {
                return false;
            }

            if (rank[rootA] < rank[rootB]) {
                parent[rootA] = rootB;
            } 
            else if (rank[rootA] > rank[rootB]) {
                parent[rootB] = rootA;
            } 
            else {
                parent[rootB] = rootA;
                rank[rootA]++;
            }

            return true;
        };

        for (let [u, v] of edges) {
            if (!union(u, v)) {
                return [u, v];
            }
        }

        return [];
    }
}
