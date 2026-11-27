class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const total = n * n;

        // Union-Find over cells, indexed as r * n + c
        const parent = Array.from({ length: total }, (_, i) => i);
        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };
        const union = (a, b) => {
            const ra = find(a), rb = find(b);
            if (ra !== rb) parent[ra] = rb;
        };

        // Elevations are distinct values in [0, n^2 - 1], so pos[h] is the cell with elevation h
        const pos = new Array(total);
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                pos[grid[r][c]] = [r, c];
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let t = 0; t < total; t++) {
            const [r, c] = pos[t];

            // the cell with elevation t becomes available; connect it to flooded neighbors
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] <= t) {
                    union(r * n + c, nr * n + nc);
                }
            }

            if (find(0) === find(total - 1)) return t;
        }

        return total - 1;
    }
}