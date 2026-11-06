class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if (!grid || grid.length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let maxArea = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] !== 1) continue;

                // New island: flood-fill and count its cells
                let area = 0;
                grid[r][c] = 0;
                const stack = [[r, c]];

                while (stack.length > 0) {
                    const [x, y] = stack.pop();
                    area++;

                    for (const [dx, dy] of dirs) {
                        const nx = x + dx;
                        const ny = y + dy;
                        if (
                            nx >= 0 && nx < rows &&
                            ny >= 0 && ny < cols &&
                            grid[nx][ny] === 1
                        ) {
                            grid[nx][ny] = 0; // mark visited
                            stack.push([nx, ny]);
                        }
                    }
                }

                maxArea = Math.max(maxArea, area);
            }
        }

        return maxArea;
    }
}