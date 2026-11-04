class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // Quickselect: find the element that would sit at index n - k in sorted order
        const target = nums.length - k;
        let lo = 0;
        let hi = nums.length - 1;

        while (lo < hi) {
            // median-of-three-ish pivot: random pivot avoids worst-case on sorted input
            const pivotIdx = lo + Math.floor(Math.random() * (hi - lo + 1));
            const pivot = nums[pivotIdx];

            // 3-way partition (handles many duplicates well)
            let lt = lo;      // nums[lo..lt-1] < pivot
            let i = lo;       // nums[lt..i-1] == pivot
            let gt = hi;      // nums[gt+1..hi] > pivot

            while (i <= gt) {
                if (nums[i] < pivot) {
                    [nums[i], nums[lt]] = [nums[lt], nums[i]];
                    i++;
                    lt++;
                } else if (nums[i] > pivot) {
                    [nums[i], nums[gt]] = [nums[gt], nums[i]];
                    gt--;
                } else {
                    i++;
                }
            }

            if (target < lt) {
                hi = lt - 1;
            } else if (target > gt) {
                lo = gt + 1;
            } else {
                return nums[target];
            }
        }

        return nums[target];
    }
}