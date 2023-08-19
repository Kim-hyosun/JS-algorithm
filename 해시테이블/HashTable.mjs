import {DoublyLinkedList} from '../연결리스트/DoublyLinkedList.mjs'

class HashData{
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable{
  constructor() {
    this.arr = [];
    for(let i = 0 ; i < 10; i++){
      this.arr[i] = new DoublyLinkedList(); 
    }
  }

  hashFunction(number){
    return number % 10;
  }

  set(key, value){ 
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value))
  }

  get(key){
    let currentNode = this.arr[this.hashFunction(key)].head;
    while(currentNode != null){ //해당 리스트가 비어있지 않은경우
      if(currentNode.data.key == key) {//현재노드의 데이터 키가 찾는 값이면 
      return currentNode.data.value  //값을 그대로 리턴하고,
      }     
      currentNode = currentNode.next; //그렇지 않으면 다음노드를 가리킴 
    }
    return null; //리스트가 비었거나, 리스트 끝까지 돌았는데 찾는값이 없으면 null 리턴 
  }

  remove(key){
    let list = this.arr[this.hashFunction(key)]; 
    let currentNode = list.head;
    let deletedIndex = 0;
    while(currentNode != null){
        if(currentNode.data.key == key){
          return list.deleteAt(deletedIndex);
        }
        currentNode = currentNode.next; 
        deletedIndex++;
    }
    return null;
  }
}

export {HashTable};