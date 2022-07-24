// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

class MyQueue {
  constructor(){
    this.queue = [];
  }
}

MyQueue.prototype.push = function(x) {
  return  this.queue.push(x);
};

MyQueue.prototype.pop = function(){
  return this.queue.shift();
}

MyQueue.prototype.peek = function() {
  return this.queue[0];
}
MyQueue.prototype.empty = function(){
    return !this.queue.length;
}

let queue = new MyQueue;

queue.push(1)
queue.push(3)
queue.push(1)
queue.push(5)
console.log(queue)// [1,3,1,5]
queue.pop()
console.log(queue)// [3,1,5]
console.log(queue.peek())
console.log(queue.empty())

//pretty sure pop is doign what shift would normally do because this is supposed to act as a FIFO queue and so we think of it that way not like a stack which would be LIFO
