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
  unshift(val) {
    let newHead = new Node(val);
    if (!this.length) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(idx) {
    // O(n)
    if (idx < 0 || idx > this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(idx, val) {
    let nodeToUpdate = this.get(idx);
    if (nodeToUpdate) {
      nodeToUpdate.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    //O(1)
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(idx) {
    // O(1) from beginning or O(n) from somewhere else
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length - 1) return this.pop(); //-1 here because were checking to see if its the last item
    if (idx === 0) return this.shift;

    let prev = this.get(idx - 1);
    let removed = this.get(idx);
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    //relatively common interview question
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

let list = new singlyLinkedList();
list.push('HI');
list.push('FRIEND');

//list.traverse();
list.unshift('Um,');
list.shift();
console.log(list);

console.log(list.get(1));
