class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // max-heap of size k, keyed by squared distance
        // each entry: [dist, point]
        const heap = [];

        const siftUp = (i) => {
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (heap[p][0] >= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const siftDown = (i) => {
            const n = heap.length;
            while (true) {
                let largest = i;
                const l = 2 * i + 1;
                const r = 2 * i + 2;
                if (l < n && heap[l][0] > heap[largest][0]) largest = l;
                if (r < n && heap[r][0] > heap[largest][0]) largest = r;
                if (largest === i) break;
                [heap[largest], heap[i]] = [heap[i], heap[largest]];
                i = largest;
            }
        };

        for (const pt of points) {
            const d = pt[0] * pt[0] + pt[1] * pt[1];
            if (heap.length < k) {
                heap.push([d, pt]);
                siftUp(heap.length - 1);
            } else if (d < heap[0][0]) {
                heap[0] = [d, pt];
                siftDown(0);
            }
        }

        return heap.map((entry) => entry[1]);
    }
}