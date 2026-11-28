class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        // Every letter that appears must be in the output
        const adj = new Map();
        const indegree = new Map();
        for (const w of words) {
            for (const ch of w) {
                if (!adj.has(ch)) {
                    adj.set(ch, new Set());
                    indegree.set(ch, 0);
                }
            }
        }

        // Compare adjacent words to extract ordering edges
        for (let i = 0; i < words.length - 1; i++) {
            const a = words[i];
            const b = words[i + 1];
            const len = Math.min(a.length, b.length);

            let j = 0;
            while (j < len && a[j] === b[j]) j++;

            if (j === len) {
                // No differing letter: a longer word before its own prefix is invalid
                if (a.length > b.length) return "";
                continue;
            }

            // First differing letters give a < b
            if (!adj.get(a[j]).has(b[j])) {
                adj.get(a[j]).add(b[j]);
                indegree.set(b[j], indegree.get(b[j]) + 1);
            }
        }

        // Kahn's algorithm (topological sort)
        const queue = [];
        for (const [ch, deg] of indegree) {
            if (deg === 0) queue.push(ch);
        }

        let result = "";
        for (let head = 0; head < queue.length; head++) {
            const ch = queue[head];
            result += ch;
            for (const nei of adj.get(ch)) {
                indegree.set(nei, indegree.get(nei) - 1);
                if (indegree.get(nei) === 0) queue.push(nei);
            }
        }

        // If some letters were never freed, there is a cycle
        return result.length === adj.size ? result : "";
    }
}