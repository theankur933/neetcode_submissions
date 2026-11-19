class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length;
        if (n === 0 || s[0] === '0') return 0;

        let prev2 = 1; // dp[i-2]
        let prev1 = 1; // dp[i-1], for the first character (already known non-zero)

        for (let i = 2; i <= n; i++) {
            let cur = 0;

            // single digit
            if (s[i - 1] !== '0') {
                cur += prev1;
            }

            // two digits
            const two = (s.charCodeAt(i - 2) - 48) * 10 + (s.charCodeAt(i - 1) - 48);
            if (two >= 10 && two <= 26) {
                cur += prev2;
            }

            prev2 = prev1;
            prev1 = cur;
        }

        return prev1;
    }
}