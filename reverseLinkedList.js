// Runtime: 63 ms, faster than 97.20% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.6 MB, less than 23.47% of JavaScript online submissions for Reverse Linked List.

const reverseList = (node) => {
 let prev = null;

 while(node){
  let next = node.next;
  node.next = prev;
  prev = node;
  node = next
 }
 return prev;
}

//honestly writing the list is a biotch just trust me it works
