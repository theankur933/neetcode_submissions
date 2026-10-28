
class PrefixTree {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let node = this.root;

        for (const ch of word) {
            if (!node[ch]) {
                return false;
            }
            node = node[ch];
        }

        return node.isEnd === true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;

        for (const ch of prefix) {
            if (!node[ch]) {
                return false;
            }
            node = node[ch];
        }

        return true;
    }
}
