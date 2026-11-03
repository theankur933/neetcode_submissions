class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        const cols = new Set();
        const diag = new Set();     // r - c
        const antiDiag = new Set(); // r + c
        const queens = new Array(n); // queens[r] = column of queen in row r

        const backtrack = (r) => {
            if (r === n) {
                const board = queens.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1));
                result.push(board);
                return;
            }
            for (let c = 0; c < n; c++) {
                if (cols.has(c) || diag.has(r - c) || antiDiag.has(r + c)) continue;

                cols.add(c);
                diag.add(r - c);
                antiDiag.add(r + c);
                queens[r] = c;

                backtrack(r + 1);

                cols.delete(c);
                diag.delete(r - c);
                antiDiag.delete(r + c);
            }
        };

        backtrack(0);
        return result;
    }
}