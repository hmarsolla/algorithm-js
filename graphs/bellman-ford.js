// The Bellman-Ford algorithm is used to find the shortest path from a single source vertex to all other vertices in a weighted graph. It can handle negative weights, which makes it more versatile than Dijkstra's algorithm.

// Steps:

// 1 - Initialize the distance to the source vertex to 0 and the distance to all other vertices to infinity.
// 2 - Relax all the edges |V| - 1 times.
// 3 - Check for negative-weight cycles.

class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
    }

    addEdge(src, dest, weight) {
        this.edges.push([src, dest, weight]);
    }

    BellmanFord(start) {
        const distances = {};
        const vertices = this.vertices;
        const edges = this.edges;

        vertices.forEach(v => {
            distances[v] = Infinity;
        });
        distances[start] = 0;

        for (let i = 0; i < vertices.length - 1; i++) {
            edges.forEach(edge => {
                const [u, v, w] = edge;
                if (distances[u] + w < distances[v]) {
                    distances[v] = distances[u] + w;
                }
            });
        }

        for (let i = 0; i < edges.length; i++) {
            const [u, v, w] = edges[i];
            if (distances[u] + w < distances[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }

        return distances;
    }
}

// Example usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", -1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 3);
graph.addEdge("B", "D", 2);
graph.addEdge("B", "E", 2);
graph.addEdge("D", "B", 1);
graph.addEdge("D", "C", 5);
graph.addEdge("E", "D", -3);

console.log(graph.BellmanFord("A")); // { A: 0, B: -1, C: 2, D: -2, E: 1 }