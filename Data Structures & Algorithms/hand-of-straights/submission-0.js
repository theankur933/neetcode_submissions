class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        const count = new Map();
        for (const card of hand) {
            count.set(card, (count.get(card) || 0) + 1);
        }

        const keys = [...count.keys()].sort((a, b) => a - b);

        for (const start of keys) {
            const need = count.get(start);
            if (need === 0) continue;

            // Start `need` groups at this card
            for (let i = 0; i < groupSize; i++) {
                const card = start + i;
                const have = count.get(card) || 0;
                if (have < need) return false;
                count.set(card, have - need);
            }
        }

        return true;
    }
}