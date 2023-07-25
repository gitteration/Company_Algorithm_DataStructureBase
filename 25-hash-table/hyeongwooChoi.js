class HashTable {
    constructor(size=17) {
        this.keyMap = new Array(size);
    }
     _hash(key, arrayLen) {
        let total = 0;
        for (let char of key) {
            let value = char.charCodeAt(0) - 96
            total = (total + value) % arrayLen;
        }
        return total;
    }


    /**
     *  해시 함수 성능 향상시키기
     */
    _hash_up(key, arrayLen) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i<Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % arrayLen;
        }
        return total;
    }


    _hashIndex(key) {
        return this._hash(key) % this.keyMap.length;
    }

    /**
     * Hash 테이블 Set 메소드
     */
    set(key, value) {
        const index = this._hashIndex(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        const foundPair = this.keyMap[index].find((pair) => pair[0] === key);
        if (foundPair) {
            foundPair[1] = value;
        } else {
            this.keyMap[index].push([key, value]);
        }
    }

    /**
     * Hash 테이블 Get 메소드
     */
    get(key) {
        const index = this._hashIndex(key);
        if (this.keyMap[index]) {
            const foundPair = this.keyMap[index].find((pair) => pair[0] === key);
            return foundPair ? foundPair[1] : undefined;
        }
        return undefined;
    }

}

let ht = new HashTable();
ht.set("hello world", "goodbye!!");
ht.set("1", 1);
ht.set("hello world 2", "goodbye!!");

console.log(ht.get("hello world"));
console.log(ht.get("hello world 3"));
