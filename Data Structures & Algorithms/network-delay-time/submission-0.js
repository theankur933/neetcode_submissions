class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // Adjacency list (1-indexed)
        const graph = Array.from({ length: n + 1 }, () => []);
        for (const [u, v, t] of times) {
            graph[u].push([v, t]);
        }

        const dist = new Array(n + 1).fill(Infinity);
        const visited = new Array(n + 1).fill(false);
        dist[k] = 0;

        for (let iter = 0; iter < n; iter++) {
            // Pick the unvisited node with the smallest distance
            let u = -1;
            for (let i = 1; i <= n; i++) {
                if (!visited[i] && (u === -1 || dist[i] < dist[u])) {
                    u = i;
                }
            }

            if (u === -1 || dist[u] === Infinity) break;
            visited[u] = true;

            // Relax outgoing edges
            for (const [v, t] of graph[u]) {
                if (dist[u] + t < dist[v]) {
                    dist[v] = dist[u] + t;
                }
            }
        }

        let ans = 0;
        for (let i = 1; i <= n; i++) {
            if (dist[i] === Infinity) return -1;
            ans = Math.max(ans, dist[i]);
        }
        return ans;
    }
}