import { HashTable } from '../해시테이블/HashTable.mjs';

class HashSet {
  constructor() {
    this.HashTable = new HashTable();
  }

  add(data) {
    if (this.HashTable.get(data) == null) {
      this.HashTable.set(data, -1); //key에 data를 넣고, value에는 -1을 넣음
    }
  }

  isContain(data) {
    return this.HashTable.get(data) != null; //data가 있으면 true리턴
  }

  remove(data) {
    this.HashTable.remove(data); //data를 삭제
  }

  clear() {
    //해시테이블의 모든 배열을 초기화
    for (let i = 0; i < this.HashTable.arr.length; i++) {
      this.HashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    for (let i = 0; i < this.HashTable.arr.length; i++) {
      if (this.HashTable.arr[i].count > 0) {
        //count가 0보다 크면 = 비어있지 않으면?
        empty = false;
        break; //for문 빠져나가기
      }
    }
    return empty;
  }

  printAll() {
    for (let i = 0; i < this.HashTable.arr.length; i++) {
      let currentNode = this.HashTable.arr[i].head;
      while (currentNode != null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}
export { HashSet };
