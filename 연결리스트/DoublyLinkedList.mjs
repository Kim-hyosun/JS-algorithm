class Node{
  constructor(data, next = null, prev = null){ //이전 노드를 가르키기 위한 prev프로퍼티 
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  printAll(){
    let currentNode = this.head;
    let text = "[";

    while(currentNode != null){
      text += currentNode.data;
      currentNode = currentNode.next;
      if(currentNode != null){
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  clear(){
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data){
    if(index > this.count || index < 0){
      throw new Error("범위를 넘어갔습니다.")
    }
    let newNode = new Node(data);

    if(index == 0){ //index가 0 인경우 = head에 삽입하는 경우 
      newNode.next = this.head;
      if(this.head != null){ //head가 null일때 error나지 않도록
          this.head.prev = newNode; //head가 가리키는 노드의 이전노드를 새로운 노드로 설정
      }
      this.head = newNode;
    }else if(index == this.count){
      newNode.next = null; //새로운노드의 다음노드를 null로 설정 
      newNode.prev = this.tail; //새로운노드의 이전노드를 tail이 가리키던 노드로 설정 

    }else{  //index가 0이 아닌경우 = head아닌 위치에 삽입하는 경우
      let currentNode = this.head; 

      for(let i = 0 ; i < index - 1; i++){
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode; //새로운 노드의 이전노드를 current로 설정
      currentNode.next = newNode; //current의 다음 노드를 새로온 노드로 설정
      newNode.next.prev = newNode; //새로온 노드의 다음노드의 이전노드를 새로온 노드로 설정
    }

    if(newNode.next == null){ //새로 삽입한 노드의 다음노드가 없으면(새로온 애가 마지막 애라면)
      this.tail = newNode; //tail이 새로운 노드일수있도록 설정
    }
    this.count++;
  }

  insertLast(data){
    this.insertAt(this.count, data);
  }

  deleteAt(index){
    if(index >= this.count || index < 0){
      throw new Error("제거할 수 없습니다.");
    }
    let currentNode = this.head; 
    if(index == 0){//헤드 노드를 제거
      let deleteNode = this.head;
      if(this.head.next == null){ //데이터가 1개일 때
        this.head = null;
        this.tail = null;
      } else{ //데이터가 2개 이상일 때 
        this.head = this.head.next; //head가 제거 되기 때문에,head의 다음노드를 head로 설정
        this.head.prev = null; //
      }
      this.count--;
      return deleteNode;
    }else if(index == this.count - 1){ //마지막 노드를 제거하는 경우
      let deletedNode = this.tail; //삭제할 노드를 tail로 설정 
      this.tail.prev.next = null; //tail의 이전노드의 다음노드를 null로 설정 
      this.tail = this.tail.prev; //tail이전 노드를 tail로 설정
      this.count--;
      return deletedNode;
    }else{ //head, tail을 제외한 나머지 노드를 제거
      for(let i = 0 ; i < index - 1 ; i++){
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode.next;//current의 다음노드를 삭제할 노드로 지정
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode; //current의 다음 노드의 이전노드를 current로 설정
      this.count--;
      return deletedNode;
    }
  }

  deleteLast(){
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index){
    if(index >= this.count || index < 0){
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for(let i = 0 ; i < index ; i++){
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
export { Node , DoublyLinkedList };