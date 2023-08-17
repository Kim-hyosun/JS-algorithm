import { Deque } from "./Deque.mjs";

let deque = new Deque();

console.log('==== addFirst() ====')
console.log(`isEmpty? ${deque.isEmpty()}`)
deque.addFirst(1)
deque.addFirst(2)
deque.addFirst(3)
deque.addFirst(4)
deque.addFirst(5)
deque.printAll()
console.log(`isEmpty? ${deque.isEmpty()}`)
console.log(`|n`)

console.log('==== removeFirst() ====')
deque.removeFirst()
deque.printAll()
deque.removeFirst()
deque.printAll()
deque.removeFirst()
deque.printAll()
deque.removeFirst()
deque.printAll()
deque.removeFirst()
deque.printAll()
console.log(`isEmpty? ${deque.isEmpty()}`)
console.log(`|n`)

console.log('==== addLast() ====')
deque.addLast(1)
deque.addLast(2)
deque.addLast(3)
deque.addLast(4)
deque.addLast(5)
deque.printAll()
console.log(`isEmpty? ${deque.isEmpty()}`)
console.log(`|n`)

console.log('==== removeLast() ====')
deque.removeLast()
deque.printAll()
deque.removeLast()
deque.printAll()
deque.removeLast()
deque.printAll()
deque.removeLast()
deque.printAll()
deque.removeLast()
deque.printAll()
console.log(`isEmpty? ${deque.isEmpty()}`)
console.log(`|n`)

//스택은 덱의 addFirst() & removeFirst()를 이용하거나 addLast() & removeLast()를 이용하면 구현가능 

//큐는 덱의 addLast() & removeFirst()를 이용하거나 addFirst() & removeLast()를 이용하면 구현가능