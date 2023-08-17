import {DoublyLinkedList} from '../연결리스트/DoublyLinkedList.mjs'
//큐는 First in First out (head에 삽입하고 tail에서 제거)
//먼저 온 사람이 먼저 나감 (선입선출)
class Queue{
  constructor(){
    this.list = new DoublyLinkedList();
  }

  enqueue(data){ //리스트의 앞부분에 data 넣기
    this.list.insertAt(0, data);
  }

  dequeue(){ //데이터를 제거하기 
    try{
      return this.list.deleteLast();
    } catch(e){
      return null; 
    }
  }

  front(){
    return this.list.tail;
  }

  isEmpty(){
    return (this.list.count == 0);
  }
}

export {Queue}