/**
 * 그래프의 유형
 */

class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * 점(vertex)
     *
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    /**
     * 선(Edge)
     */
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1 );
    }

    /**
     * 선(Edge) 제거 솔루션
     */
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Seoul");
g.addVertex("Inchon");

