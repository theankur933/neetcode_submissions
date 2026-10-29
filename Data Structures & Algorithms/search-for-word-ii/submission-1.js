
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const rows = board.length;
        const cols = board[0].length;
        const result = [];

        // Build a Trie from the given words.
        const root = {};

        for (const word of words) {
            let node = root;

            for (const ch of word) {
                if (!node[ch]) {
                    node[ch] = {};
                }
                node = node[ch];
            }

            node.word = word;
        }

        const dfs = (r, c, node) => {
            const ch = board[r][c];

            if (ch === "# " || !node[ch]) return;

            const next = node[ch];

            // A complete word has been found.
            if (next.word !== undefined) {
                result.push(next.word);

                // Prevent finding the same word again.
                delete next.word;
            }

            // Mark this cell as visited.
            board[r][c] = "#";

            // Explore four neighboring cells.
            if (r > 0) dfs(r - 1, c, next);
            if (r + 1 < rows) dfs(r + 1, c, next);
            if (c > 0) dfs(r, c - 1, next);
            if (c + 1 < cols) dfs(r, c + 1, next);

            // Restore the original cell.
            board[r][c] = ch;

            // Remove exhausted Trie branches to improve performance.
            if (Object.keys(next).length === 0) {
                delete node[ch];
            }
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root);
            }
        }

        return result;
    }
}
