class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const last = new Array(26).fill(0);
        for (let i = 0; i < S.length; i++) {
            last[S.charCodeAt(i) - 97] = i;
        }

        const result = [];
        let start = 0;
        let end = 0;

        for (let i = 0; i < S.length; i++) {
            end = Math.max(end, last[S.charCodeAt(i) - 97]);
            if (i === end) {
                result.push(end - start + 1);
                start = i + 1;
            }
        }

        return result;
    }
}