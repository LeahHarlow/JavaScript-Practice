//last in first out
//think callstack
//think command z, most recent thing is first to go.
//routing history object
// if all you're using is push and pop with an array you've got a stack

//if we dont care about indices, its more efficient to use a linked list for a stack than an array but arrays are  quicker and easier so dont think you cant use them;

//using push and pop with a linked list though is O(n) not constant time so use shift and unshift basically and use the front of the list rather than the back of the array.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) { //basically unshift
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }
  pop() {//basically shift
    if (!this.size) return null;
    let oldfirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldfirst;
  }
}

let stackityStack = new Stack();

console.log(stackityStack);
stackityStack.push('Good');
stackityStack.push('Morning');
console.log('after push', stackityStack);
stackityStack.pop();
console.log('after pop', stackityStack);

//insertion and removal are both constant time here O(1); searching and accessing are not a priority here - which would be O(n); So that is actualy a situation where an array woud be better.
