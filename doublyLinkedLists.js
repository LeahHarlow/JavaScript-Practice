//more flexibity than than singly linked lists but they do take more memory.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
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
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let removedTail = this.tail;
    let previousNode = this.tail.previous;
    if (this.length === 1) {
      this.head = null;
      this.length = null;
    }
    this.tail = previousNode;
    this.tail.next = null;
    removedTail.previous = null;
    this.length--;
    return removedTail;
  }
  shift() {
    if (!this.length) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.previous = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= Math.floor(this.length / 2)) {
      let count = 0;
      let current = this.head;
      while (idx !== count) {
        current = current.next;
        count++;
      }
      return current;
    }
    if (idx >= Math.floor(this.length / 2)) {
      let count = this.length - 1;
      let current = this.tail;
      while (idx !== count) {
        current = current.previous;
        count--;
      }
      return current;
    }
  }
  set(idx, val){
    let nodeToUpdate = this.get(idx);
    if(nodeToUpdate){
      nodeToUpdate.val = val;
      return true;
    }
    return false;
  }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(7);
list.push(13);
list.push(9);
console.log(list);

list.shift();
console.log(list);
list.unshift(1);
console.log(list);

list.set(1,17);
console.log(list);
