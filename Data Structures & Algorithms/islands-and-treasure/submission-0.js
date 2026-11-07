class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const m = grid.length;
        const n = grid[0].length;
        const queue = [];

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 0) queue.push([r, c]);
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let head = 0; head < queue.length; head++) {
            const [r, c] = queue[head];

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nc < 0 || nr >= m || nc >= n) continue;
                if (grid[nr][nc] !== INF) continue;

                grid[nr][nc] = grid[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
}