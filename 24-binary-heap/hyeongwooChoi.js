class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    /**
     * insert 메소드
     * 새로운 요소를 힙에 삽입하는 메소드입
     */
    insert(element) {
        this.values.push(element); // 새로운 요소를 배열의 마지막에 추가
        this.bubbleUp(); // 삽입한 요소를 올바른 위치로 이동시키기 위해 bubbleUp 메소드를 호출
    }

    /**
     * bubbleUp 메소드
     * 삽입한 요소를 올바른 위치로 이동시키는 메소드
     */
    bubbleUp() {
        let idx = this.values.length - 1; // 마지막 요소의 인덱스를 가져옴
        const element = this.values[idx]; // 새로 삽입한 요소의 값
        while (true) {
            let parentIdx = Math.floor((idx - 1) / 2); // 현재 요소의 부모 노드의 인덱스를 계산
            let parent = this.values[parentIdx]; // 현재 요소의 부모 노드의 값
            if (element <= parent) break; // 현재 요소가 부모보다 작거나 같으면 반복을 종료
            this.values[parentIdx] = element; // 현재 요소가 부모보다 크다면 부모 노드와 값을 교환
            idx = parentIdx; // 인덱스를 부모 노드의 인덱스로 업데이트하여 다음 반복에서 부모 노드와 비교
        }
    }

    /**
     * extractMax 메소드
     * 힙에서 최대값을 추출하고 반환하는 메소드입니
     */
    extractMax() {
        const max = this.values[0]; // 최대값은 항상 루트 노드의 값
        const end = this.values.pop(); // 마지막 요소를 가져온다.
        if (this.values.length > 0) {
            this.values[0] = end; // 루트 노드에 마지막 요소를 넣는다
            this.sinkDown(); // 추출한 값이 올바른 위치로 이동하도록 sinkDown 메소드를 호출
        }
        return max; // 추출한 최대값을 반환
    }

    /**
     * sinkDown 메소드
     * 추출한 값을 올바른 위치로 이동시키는 메소드
     */
    sinkDown() {
        let idx = 0; // 현재 노드의 인덱스입니다.
        const length = this.values.length; // 배열의 길이
        const element = this.values[0]; // 현재 노드의 값
        while (true) {
            let leftChildIdx = 2 * idx + 1; // 왼쪽 자식 노드의 인덱스를 계산
            let rightChildIdx = 2 * idx + 2; // 오른쪽 자식 노드의 인덱스를 계산
            let leftChild, rightChild;
            let swap = null; // 노드를 교환할 위치를 저장할 변수

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]; // 왼쪽 자식 노드의 값
                if (leftChild > element) {
                    swap = leftChildIdx; // 왼쪽 자식이 현재 노드보다 크다면 swap에 왼쪽 자식 노드의 인덱스를 저장
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]; // 오른쪽 자식 노드의 값
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx; // 오른쪽 자식이 현재 노드 또는 왼쪽 자식보다 크다면 swap에 오른쪽 자식 노드의 인덱스를 저장
                }
            }

            if (swap === null) break; // swap이 null이라면 올바른 위치를 찾은 것이므로 반복을 종료
            this.values[idx] = this.values[swap]; // 현재 노드와 swap 위치의 노드 값을 교환
            idx = swap; // 인덱스를 swap 위치로 업데이트하여 다음 반복에서 해당 노드와 자식 노드를 비교
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(55);
heap.insert(32);
heap.insert(34);
heap.insert(12);
heap.insert(22);

