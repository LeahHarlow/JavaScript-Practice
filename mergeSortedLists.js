// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

var mergeTwoLists = function(list1, list2) {
  if(!list1.length) return list2;
  if(!list2.length) return list1;
  let totalList = list1;
  while(list2.length){
      totalList.push(list2[0]);
      list2 = list2.slice(1);
  }
  return totalList.sort((a,b) => a-b)
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))


