class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = []; // min-heap holding the k largest values seen so far
        for (const n of nums) {
            this._push(n);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this._push(val);
        return this.heap[0];
    }

    _push(val) {
        const h = this.heap;
        if (h.length < this.k) {
            h.push(val);
            this._siftUp(h.length - 1);
        } else if (val > h[0]) {
            h[0] = val;
            this._siftDown(0);
        }
    }

    _siftUp(i) {
        const h = this.heap;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (h[p] <= h[i]) break;
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    }

    _siftDown(i) {
        const h = this.heap;
        const n = h.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1;
            const r = 2 * i + 2;
            if (l < n && h[l] < h[smallest]) smallest = l;
            if (r < n && h[r] < h[smallest]) smallest = r;
            if (smallest === i) break;
            [h[smallest], h[i]] = [h[i], h[smallest]];
            i = smallest;
        }
    }
}