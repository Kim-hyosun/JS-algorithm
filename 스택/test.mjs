import { Stack } from "./Stack.mjs";

let stack = new Stack();

console.log("=====1st=====");
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log("=====2nd=====");
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.peek().data); //4
stack.pop();
console.log(stack.peek().data); //3
console.log(`isEmpty: ${stack.isEmpty()}`); //false
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty: ${stack.isEmpty()}`); //true
console.log(stack.pop()); //빈 스택을 pop하면 예외처리 실행 null출력