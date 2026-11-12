
class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length;

        let a = 0;
        let b = 0;

        for (let i = 2; i <= n; i++) {
            let c = Math.min(
                a + cost[i - 2],
                b + cost[i - 1]
            );

            a = b;
            b = c;
        }

        return b;
    }
}
