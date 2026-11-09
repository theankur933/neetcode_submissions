class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        for (const [a, b] of prerequisites) {
            adj[b].push(a);
            indegree[a]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) queue.push(i);
        }

        let taken = 0;
        let head = 0; // index pointer avoids O(n) shift()
        while (head < queue.length) {
            const course = queue[head++];
            taken++;
            for (const next of adj[course]) {
                if (--indegree[next] === 0) queue.push(next);
            }
        }

        return taken === numCourses;
    }
}