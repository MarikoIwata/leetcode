/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //iterate over array with for loop
    for (let i = 0; i<=nums.length; i++){
        if(i >= nums.length) return -1;
        if(nums[i] === target){
            return i
        }
    } 
    //if the element is strictly equal to the target then return the index
    
};
// @lc code=end

