class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let start = 0;
        let maxLen = 1;

        const expand = (left, right) => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }
            // After the loop, the palindrome spans (left + 1) to (right - 1)
            const len = right - left - 1;
            if (len > maxLen) {
                maxLen = len;
                start = left + 1;
            }
        };

        for (let i = 0; i < s.length; i++) {
            expand(i, i);       // odd-length palindromes, centered at i
            expand(i, i + 1);   // even-length palindromes, centered between i and i + 1
        }

        return s.substring(start, start + maxLen);
    }
}