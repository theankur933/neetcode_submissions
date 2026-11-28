class Solution {
    findCheapestPrice(n, flights, src, dst, k) {
        let dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        // At most k stops means at most k + 1 flights
        for (let i = 0; i <= k; i++) {
            // Copy so this round only uses results from the previous round
            const next = dist.slice();
            for (const [from, to, price] of flights) {
                if (dist[from] !== Infinity && dist[from] + price < next[to]) {
                    next[to] = dist[from] + price;
                }
            }
            dist = next;
        }

        return dist[dst] === Infinity ? -1 : dist[dst];
    }
}