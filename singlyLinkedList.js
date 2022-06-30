/*
Bunch of elements with no inex that contains a head tail and lenth. Each element is a node and each node has a value and a pointer to the next node. Have to start from the beginning to reach an element, however insertiona nd deletion is much less expensive because it doesnt have to be reindexed like an array.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  shift() {
    if (!this.length) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }
}

let list = new singlyLinkedList();
list.push('HI');
list.push('FRIEND');
//console.log(list);

list.traverse();
