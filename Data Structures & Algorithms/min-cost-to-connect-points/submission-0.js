class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const dist = new Array(n).fill(Infinity); // cheapest edge connecting each point to the tree
        const inTree = new Array(n).fill(false);

        dist[0] = 0;
        let total = 0;

        for (let step = 0; step < n; step++) {
            // pick the closest point not yet in the tree
            let u = -1;
            for (let i = 0; i < n; i++) {
                if (!inTree[i] && (u === -1 || dist[i] < dist[u])) u = i;
            }

            inTree[u] = true;
            total += dist[u];

            // relax distances using the newly added point
            for (let v = 0; v < n; v++) {
                if (!inTree[v]) {
                    const d = Math.abs(points[u][0] - points[v][0]) +
                              Math.abs(points[u][1] - points[v][1]);
                    if (d < dist[v]) dist[v] = d;
                }
            }
        }

        return total;
    }
}