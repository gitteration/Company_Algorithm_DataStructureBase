function hase(key, arrayLen){
    let total = 0;
    for ( let char of key) {
        let value = char.charCodeAt(0) - 96 // a가 utf-8 : 97 이라, a부터 숫자알아내기위해 이렇게함 한글은?
        total = (total + value) % arrayLen;
    }
    return total;
}

// 해쉬테이블의 크기는 소수가 되어야함.. ex) 53


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0 ; i < Math.min(key.length, 100); i ++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value){
        let index = this._hash(key);

        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key,value])
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0 ; i < this.keyMap[index].length ; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
            return this.keyMap[index]
        }
        return undefined;
    }

    keys(){
        let keysArr = [];

        for(let i = 0; i < this.keyMap.length ; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }

        return keysArr;
    }

    values(){
        let valuesArr = [];

        for(let i = 0; i < this.keyMap.length ; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }

        return valuesArr;
    }
}

let ht  = new HashTable(17);
ht.set('hi','bye');
ht.set('hivv', '11');

let test = ht.get('hi');
let test2 = ht.values();
let test3 = ht.keys();
console.log('asdf')
console.log(test);
console.log(test2);
//
