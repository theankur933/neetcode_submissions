class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let farthest = 0;
        const last = nums.length - 1;

        for (let i = 0; i <= last; i++) {
            if (i > farthest) return false;
            farthest = Math.max(farthest, i + nums[i]);
            if (farthest >= last) return true;
        }

        return true;
    }
}