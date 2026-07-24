/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // add 

    let set = new Set();

    while(headA){
        set.add(headA);
        headA = headA.next;
    }

    // check

    while(headB){
        if(set.has(headB)){
            return headB;
        }else{
            headB = headB.next;
        }
    }
    return null;
};