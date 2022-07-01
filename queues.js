//fifo, first in first out
//task processing, like something sent tot he printer

//arrays are not the move if you want to shift and unshift everything because it makes you reindex everything. You could push and shift or pop and unshfit.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst;
  }
}

let newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(3);
newQueue.enqueue(7);
console.log(newQueue)
newQueue.dequeue();
console.log(newQueue)
