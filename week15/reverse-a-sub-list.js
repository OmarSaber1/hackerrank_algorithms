/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, p, q) {
    
 
    let prev = null;
    let current = head;
  let i = 1;
  
    // 1 = 2 <= 3 <= 4 => 5 
    // p = 2 , q =4
    while(current && i < p){
      prev = current;
      current = current.next;
      i++;
    }
  
    // update firstpart.next
  
    let first_part_node = prev,
        last_reversed_node = current;
  
    prev = null;
  
    while(current && i< q+1 ){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }
  
    let last_part_node = current;
    // 1 => 4 => 3 => 2 = 5 
    if(first_part_node){
      first_part_node.next = prev
    }
    last_reversed_node.next = current
  
  
       return p == 1 ? prev : head; 
  };