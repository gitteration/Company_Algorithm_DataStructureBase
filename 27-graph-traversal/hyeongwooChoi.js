/**
 * 그래프의 유형
 */

class Graph {
    constructor() {
        this.adjacencyList = {
            A: ['B', 'C'],
            B: ['A', 'D', 'E'],
            C: ['A', 'F'],
            D: ['B'],
            E: ['B', 'F'],
            F: ['C', 'E']
        };
    }


    /**
     * 점(vertex) 추가 솔루션
     *
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    /**
     * 선(Edge) 추가 솔루션
     */
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
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

    /**
     * 점(vertex) 제거 솔루션
     */
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
    }

    /**
     * 섹션 27: 그래프 정리
     */
    /**
     * 재귀적 용법의 선도 그래프(DFS)
     */
    depthFirstRecursive(start) {
        const result = [];
        const visited = new Set();
        const adjacencyList = this.adjacencyList;

        function dfs(vertex) {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }
        dfs(start);
        return result;
    }

    /**
     * 반복적 용법의 선도 그래프 (DFS)
     */
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }

    /**
     * 넓이 우선 그래프 (BFS)
     */
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] =true;
                    queue.push(neighbor);
                }
            });

            return result;
        }
    }

}

let g = new Graph();

console.log("DFS :: ", g.depthFirstRecursive("B"));
console.log("DFS :: ", g.depthFirstIterative("B"));
console.log("BFS :: ", g.breadthFirst("B"));