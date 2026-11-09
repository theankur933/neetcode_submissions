class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        for (const [a, b] of prerequisites) {
            adj[b].push(a);
            indegree[a]++;
        }

        const order = []; // doubles as the BFS queue
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) order.push(i);
        }

        let head = 0;
        while (head < order.length) {
            const course = order[head++];
            for (const next of adj[course]) {
                if (--indegree[next] === 0) order.push(next);
            }
        }

        return order.length === numCourses ? order : [];
    }
}