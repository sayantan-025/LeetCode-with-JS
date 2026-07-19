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
    // add to set
    let set = new Set();

    while(headB){
        set.add(headB);
        headB = headB.next;
    }

    // check

    while(headA){
        if(set.has(headA)){
            return headA;
        }else{
            headA = headA.next;
        }
    }
    return null;
};