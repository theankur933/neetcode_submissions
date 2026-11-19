class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        const expand = (left, right) => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            expand(i, i);       // odd-length palindromes
            expand(i, i + 1);   // even-length palindromes
        }

        return count;
    }
}