class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        // Build adjacency list
        const graph = new Map();
        for (const [from, to] of tickets) {
            if (!graph.has(from)) graph.set(from, []);
            graph.get(from).push(to);
        }

        // Sort destinations in descending order so pop() yields the smallest
        for (const dests of graph.values()) {
            dests.sort().reverse();
        }

        const route = [];
        const stack = ["JFK"];

        while (stack.length > 0) {
            const airport = stack[stack.length - 1];
            const dests = graph.get(airport);

            if (dests && dests.length > 0) {
                stack.push(dests.pop());
            } else {
                route.push(stack.pop());
            }
        }

        return route.reverse();
    }
}