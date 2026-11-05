class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare; // returns true if a should be above b
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

    push(val) {
        const d = this.data;
        d.push(val);
        let i = d.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (!this.compare(d[i], d[p])) break;
            [d[i], d[p]] = [d[p], d[i]];
            i = p;
        }
    }

    pop() {
        const d = this.data;
        const top = d[0];
        const last = d.pop();
        if (d.length > 0) {
            d[0] = last;
            let i = 0;
            const n = d.length;
            while (true) {
                let best = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < n && this.compare(d[l], d[best])) best = l;
                if (r < n && this.compare(d[r], d[best])) best = r;
                if (best === i) break;
                [d[i], d[best]] = [d[best], d[i]];
                i = best;
            }
        }
        return top;
    }
}

class MedianFinder {
    constructor() {
        this.low = new Heap((a, b) => a > b);   // max-heap: smaller half
        this.high = new Heap((a, b) => a < b);  // min-heap: larger half
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Route through low so ordering between the halves is preserved
        this.low.push(num);
        this.high.push(this.low.pop());

        // Keep low the same size as high, or one larger
        if (this.high.size() > this.low.size()) {
            this.low.push(this.high.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.low.size() > this.high.size()) {
            return this.low.peek();
        }
        return (this.low.peek() + this.high.peek()) / 2;
    }
}