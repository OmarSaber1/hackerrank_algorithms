/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head == null || head.next == null) return true;

  let fast = head,
    slow = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let rightSection = reverseLinkedList(slow.next);
  slow.next = null;

  let result = head;
  console.log(head, rightSection);
  while (head && rightSection) {
    tempLeftNext = head.next;
    tempRightNext = rightSection.next;

    head.next = rightSection;
    rightSection.next = tempLeftNext;

    head = tempLeftNext;
    rightSection = tempRightNext;
  }

  return result;
};

function reverseLinkedList(head) {
  let prev = null,
    next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
