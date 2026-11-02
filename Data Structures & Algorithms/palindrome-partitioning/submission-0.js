class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const current = [];

        const isPalindrome = (l, r) => {
            while (l < r) {
                if (s[l] !== s[r]) return false;
                l++;
                r--;
            }
            return true;
        };

        const backtrack = (start) => {
            if (start === s.length) {
                result.push([...current]);
                return;
            }
            for (let end = start; end < s.length; end++) {
                if (isPalindrome(start, end)) {
                    current.push(s.slice(start, end + 1));
                    backtrack(end + 1);
                    current.pop();
                }
            }
        };

        backtrack(0);
        return result;
    }
}