class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        // Iterative DFS from the ocean border, moving uphill (or level)
        const dfs = (startR, startC, visited) => {
            const stack = [[startR, startC]];
            visited[startR][startC] = true;

            while (stack.length > 0) {
                const [r, c] = stack.pop();
                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (
                        nr >= 0 && nr < rows && nc >= 0 && nc < cols &&
                        !visited[nr][nc] &&
                        heights[nr][nc] >= heights[r][c]
                    ) {
                        visited[nr][nc] = true;
                        stack.push([nr, nc]);
                    }
                }
            }
        };

        for (let r = 0; r < rows; r++) {
            if (!pacific[r][0]) dfs(r, 0, pacific);               // left edge -> Pacific
            if (!atlantic[r][cols - 1]) dfs(r, cols - 1, atlantic); // right edge -> Atlantic
        }
        for (let c = 0; c < cols; c++) {
            if (!pacific[0][c]) dfs(0, c, pacific);               // top edge -> Pacific
            if (!atlantic[rows - 1][c]) dfs(rows - 1, c, atlantic); // bottom edge -> Atlantic
        }

        const result = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacific[r][c] && atlantic[r][c]) result.push([r, c]);
            }
        }
        return result;
    }
}