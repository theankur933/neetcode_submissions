class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let lo = 0; // fewest possible unmatched '('
        let hi = 0; // most possible unmatched '('

        for (const c of s) {
            if (c === '(') {
                lo++;
                hi++;
            } else if (c === ')') {
                lo--;
                hi--;
            } else {
                lo--; // '*' as ')'
                hi++; // '*' as '('
            }

            // Even treating every '*' as '(' we have too many ')'
            if (hi < 0) return false;

            // Can't have a negative count of open parens; a '*' just becomes empty/'('
            if (lo < 0) lo = 0;
        }

        return lo === 0;
    }
}