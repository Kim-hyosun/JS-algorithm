import { LinkedList } from '../연결리스트/LinkedList.mjs'
// 스택은 First in Last out (head에만 삽입 제거함)
// ex. 프링글스통 (먼저 온 사람이 제일 늦게 나감)
class Stack{
  constructor(){
    this.list = new LinkedList();
  }

  push(data){
    this.list.insertAt(0, data);
  }

  pop(){
    try{
      return this.list.deleteAt(0);
    } catch(e){
      return null;
    }
  }

  peek(){
    return this.list.getNodeAt(0);
  }

  isEmpty(){
    return (this.list.count == 0); //T/F반환 
  }
}

export { Stack }