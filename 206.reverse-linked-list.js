/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let cur = head;
    let prev = null;
    while(cur){
        let hold = cur.next; //holds the pointer because we reassign it later
        cur.next = prev; //reassign pointer tp previous
        prev = cur; //make prev to cur so that you can reassign cur
        cur = hold; //reassign cur to next node
    }
    return prev; //cur will point to null at the end, prev is last node we have access to
};
// @lc code=end

