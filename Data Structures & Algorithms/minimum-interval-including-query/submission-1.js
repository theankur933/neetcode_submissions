class MinHeap {
    constructor() {
        this.h = [];
    }
    size() {
        return this.h.length;
    }
    peek() {
        return this.h[0];
    }
    push(item) {
        const h = this.h;
        h.push(item);
        let i = h.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (h[p][0] <= h[i][0]) break;
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    }
    pop() {
        const h = this.h;
        const top = h[0];
        const last = h.pop();
        if (h.length > 0) {
            h[0] = last;
            let i = 0;
            const n = h.length;
            while (true) {
                let l = 2 * i + 1, r = l + 1, s = i;
                if (l < n && h[l][0] < h[s][0]) s = l;
                if (r < n && h[r][0] < h[s][0]) s = r;
                if (s === i) break;
                [h[s], h[i]] = [h[i], h[s]];
                i = s;
            }
        }
        return top;
    }
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);

        const order = queries.map((_, i) => i);
        order.sort((a, b) => queries[a] - queries[b]);

        const res = new Array(queries.length).fill(-1);
        const heap = new MinHeap();
        let i = 0;

        for (const idx of order) {
            const q = queries[idx];

            // add all intervals that start at or before q
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                heap.push([r - l + 1, r]);
                i++;
            }

            // drop intervals that end before q
            while (heap.size() > 0 && heap.peek()[1] < q) {
                heap.pop();
            }

            if (heap.size() > 0) {
                res[idx] = heap.peek()[0];
            }
        }

        return res;
    }
}