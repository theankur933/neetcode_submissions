
class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);

        // End word list mein nahi hai toh transformation possible nahi
        if (!wordSet.has(endWord)) return 0;

        let queue = [[beginWord, 1]];

        while (queue.length > 0) {
            const [word, steps] = queue.shift();

            if (word === endWord) {
                return steps;
            }

            // Har character ko a-z se replace karke check karenge
            for (let i = 0; i < word.length; i++) {
                for (let ch = 97; ch <= 122; ch++) {
                    const char = String.fromCharCode(ch);

                    if (word[i] === char) continue;

                    const newWord =
                        word.substring(0, i) +
                        char +
                        word.substring(i + 1);

                    if (wordSet.has(newWord)) {
                        queue.push([newWord, steps + 1]);

                        // Visited mark
                        wordSet.delete(newWord);
                    }
                }
            }
        }

        return 0;
    }
}
