class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // max-heap implemented as an array
        const heap = [];

        const siftUp = (i) => {
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (heap[p] >= heap[i]) break;
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
                if (l < n && heap[l] > heap[largest]) largest = l;
                if (r < n && heap[r] > heap[largest]) largest = r;
                if (largest === i) break;
                [heap[largest], heap[i]] = [heap[i], heap[largest]];
                i = largest;
            }
        };

        const push = (val) => {
            heap.push(val);
            siftUp(heap.length - 1);
        };

        const pop = () => {
            const top = heap[0];
            const last = heap.pop();
            if (heap.length > 0) {
                heap[0] = last;
                siftDown(0);
            }
            return top;
        };

        for (const s of stones) push(s);

        while (heap.length > 1) {
            const y = pop(); // heaviest
            const x = pop(); // second heaviest
            if (y !== x) push(y - x);
        }

        return heap.length === 1 ? heap[0] : 0;
    }
}