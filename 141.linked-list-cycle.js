/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const hasCycle = (head) => {
    // Set variable to store distinct nodes
    let set = new Set()
    // for traversing, initialize current with head node
    let current = head
    
    //traverse the linked list
    while(current){
        if(set.has(current)){
            // if duplication occurs, return true
            return true
        }else{
            set.add(current)
            console.log(set)
        }
        
        current = current.next
    }
    // traverse is completed, cycle not found
    return false
};

let head = [3,2,0,-4]
console.log(hasCycle(head))

// @lc code=end

