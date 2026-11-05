class Twitter {
    constructor() {
        this.time = 0;                 // global counter to order tweets
        this.tweets = new Map();       // userId -> [[time, tweetId], ...]
        this.following = new Map();    // userId -> Set of followeeIds
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) this.tweets.set(userId, []);
        this.tweets.get(userId).push([this.time++, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const users = new Set(this.following.get(userId) || []);
        users.add(userId);

        // Only the 10 most recent tweets of each user can possibly matter
        const candidates = [];
        for (const u of users) {
            const arr = this.tweets.get(u);
            if (!arr) continue;
            for (let i = arr.length - 1; i >= Math.max(0, arr.length - 10); i--) {
                candidates.push(arr[i]);
            }
        }

        candidates.sort((a, b) => b[0] - a[0]);
        return candidates.slice(0, 10).map(t => t[1]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) this.following.set(followerId, new Set());
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const set = this.following.get(followerId);
        if (set) set.delete(followeeId);
    }
}