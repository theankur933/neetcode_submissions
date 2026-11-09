class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const m = board.length;
        const n = board[0].length;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const mark = (sr, sc) => {
            if (board[sr][sc] !== 'O') return;
            board[sr][sc] = '#';
            const stack = [[sr, sc]];
            while (stack.length > 0) {
                const [r, c] = stack.pop();
                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'O') {
                        board[nr][nc] = '#';
                        stack.push([nr, nc]);
                    }
                }
            }
        };

        // Mark all 'O's connected to the left and right borders
        for (let r = 0; r < m; r++) {
            mark(r, 0);
            mark(r, n - 1);
        }
        // Mark all 'O's connected to the top and bottom borders
        for (let c = 0; c < n; c++) {
            mark(0, c);
            mark(m - 1, c);
        }

        // Capture surrounded regions, restore safe ones
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] === 'O') {
                    board[r][c] = 'X';
                } else if (board[r][c] === '#') {
                    board[r][c] = 'O';
                }
            }
        }
    }
}