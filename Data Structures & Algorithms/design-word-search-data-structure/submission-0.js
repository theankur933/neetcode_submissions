
class WordDictionary {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for (const ch of word) {
            if (!node[ch]) {
                node[ch] = {};
            }
            node = node[ch];
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (node, index) => {
            if (index === word.length) {
                return node.isEnd === true;
            }

            const ch = word[index];

            if (ch === '.') {
                for (const key of Object.keys(node)) {
                    if (key !== 'isEnd' && dfs(node[key], index + 1)) {
                        return true;
                    }
                }
                return false;
            }

            if (!node[ch]) {
                return false;
            }

            return dfs(node[ch], index + 1);
        };

        return dfs(this.root, 0);
    }
}
