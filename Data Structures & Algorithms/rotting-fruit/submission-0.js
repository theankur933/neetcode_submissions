class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];
        let fresh = 0;

        // Collect all rotten fruits and count fresh ones
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) queue.push([r, c]);
                else if (grid[r][c] === 1) fresh++;
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let minutes = 0;
        let head = 0;

        // BFS level by level; each level is one minute
        while (head < queue.length && fresh > 0) {
            const levelSize = queue.length - head;
            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue[head++];
                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        fresh--;
                        queue.push([nr, nc]);
                    }
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}