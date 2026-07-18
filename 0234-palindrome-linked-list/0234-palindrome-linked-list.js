/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // middle
    let slow = fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse 2nd half
    let prev = null;
    let curr = slow;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // check

    let firstNode = head;
    let lastNode = prev;

    while(lastNode){
        if(firstNode.val !== lastNode.val){
            return false;
        }
        firstNode = firstNode.next;
        lastNode = lastNode.next;
    }
    return true;
};