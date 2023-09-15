class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.next;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNode.node] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}


var graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
console.log(graph.addEdge("A", "B", 9));
console.log(graph.addEdge("B", "C", 7));
console.log(graph.addEdge("A", "C", 5));


class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };

}

var q = new PriorityQueue();
console.log(q.enqueue("B", 3));
console.log(q.enqueue("A", 3));
console.log(q.enqueue("C", 3));
console.log(q.values);

console.log(graph.Dijkstra("A", "E"));