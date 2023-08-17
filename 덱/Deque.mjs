import {DoublyLinkedList} from '../연결리스트/DoublyLinkedList.mjs'
//덱은 head, tail모두 데이터의 삽입, 삭제가능
//양방향으로 들어오고 나감 

class Deque{
  constructor(){
    this.list = new DoublyLinkedList();
  }

  printAll(){ //모든 데이터 출력
    this.list.printAll();
  }

  addFirst(data){ //head에 데이터 삽입 -> O(1)성능
    this.list.insertAt(0, data);
  }

  removeFirst(){ //head의 데이터 삭제 -> O(1)성능
    return this.list.deleteAt(0);
  }

  addLast(data){//tail에 데이터 삽입
    this.list.insertAt(this.list.count, data);//해당 리스트의 카운트는 마지막 원소의 인덱스
  }

  removeLast(){ //tail의 데이터 삭제 
    return this.list.deleteLast();
  }

  isEmpty(){
    return (this.list.count == 0);
  }
}

export {Deque}