import { HashSet } from './Hashset.mjs';

let hashSet = new HashSet();

console.log(`isEmpty? ${hashSet.isEmpty()}`);
console.log(`===== 데이터 삽입 =====`);
hashSet.add(1);
hashSet.add(1); //중복된 데이터는 삽입되지 않음
hashSet.add(12);
hashSet.add(123);
hashSet.printAll();
console.log(`isEmpty? ${hashSet.isEmpty()}`);

console.log(`===== 데이터 있는지 체크 =====`);
console.log(`isContain 1 ? ${hashSet.isContain(1)}`);
console.log(`===== 데이터 1 제거 =====`);
hashSet.remove(1);
hashSet.printAll();
console.log(`isEmpty? ${hashSet.isEmpty()}`);

console.log(`===== 데이터 1 있는지 체크 =====`);
console.log(`isContain 1 ? ${hashSet.isContain(1)}`);

console.log(`===== clear =====`);
hashSet.clear();
hashSet.printAll();
console.log(`isEmpty? ${hashSet.isEmpty()}`);
