import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());


console.log("Size:", list.size()); 
console.log("Head:", list.head().value);
console.log("Tail:", list.tail().value); 
console.log("At 2:", list.at(2).value); 
console.log("Contains 'cat':", list.contains("cat"));
console.log("Find 'snake':", list.find("snake"));

list.insertAt("rabbit", 3);
console.log("After insertAt:", list.toString());

list.removeAt(4);
console.log("After removeAt:", list.toString());

list.pop();
console.log("After pop:", list.toString());