// Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.
// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.


//EXAMPLES:
// headOne = 2 -> 6 -> 7 -> 8 // return the head node with value 2
// headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // return the head node with value 1
// mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1

//Remember linked lists are just objects! Will also probably need a temp to not lose the reference.

const mergeTwoLists = (head1, head2) => {
  //first I want to check if either head is null and return the one that isnt null
  if(head1 === null || head2 === null){
    return head1 === null ? head2 : head1;
  }
  //if neither is null I want to figure out which head has a lower value
  let pos1 = head1.value <= head2.value ? head1 : head2;
  let pos2 = head1 === pos1 ? head2 : head1;
  let head = pos1;

  //as long as were not at the end of either list...
  while(pos1.next !== null && pos2 !== null) {
    //check if pos1.next is less than pos2.value coz then we can just move ahead one place woth pos1
    if(pos1.next.value <= pos2.value) {
      pos1 = pos1.next;
      // if pos2 is less than pos1.next we need to fit pos2 between pos1 and pos1.next and thats where the temp comes in to hold reference
    } else {
      let temp = pos1.next;
      pos1.next = pos2;
      pos2 = temp;
    }
  }
  pos1.next = pos2;
  return head;
}

//time complexity is O(n) because it depends on the length of the lists... which might make it O(n+m) because theres two?
//space complexity O(1) bc the number of vars saved doesnt chnge based on input size


//for testing purposes
class LinkedList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function createList (nums) {
  let head = new LinkedList(nums[0])
  let origHead = head
  for (let i = 1; i < nums.length; i++) {
    head.next = new LinkedList(nums[i])
    head = head.next
  }
  return origHead
}

let headOne = createList([2, 6, 7, 8])
let headTwo = createList([1, 3, 4, 5, 9, 10])

console.log(mergeTwoLists(headOne, headTwo))
