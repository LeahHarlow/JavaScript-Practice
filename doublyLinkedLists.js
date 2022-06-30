//more flexibity than than singly linked lists but they do take more memory.

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(!this.length){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new DoublyLinkedList;
list.push(3);
list.push(7);
list.push(13);
console.log(list);
