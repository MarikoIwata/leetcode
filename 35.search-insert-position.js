/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //base case


    //recursive case slicing nums to be
    



};
// @lc code=end

// 

// var searchInsert = function(nums, target) {
//     //left
//     let left = 0
//     //right
//     let right = nums.length-1

//     //in loop check index of target
//     while (left <= right){
//     //mid point
//     let mid = Math.floor((left+right)/2)
//     //if mid is strictly equal to target then return that index
//     if(nums[mid] === target){
//         return mid;
//     } else if(target <nums [mid]) {
//         //move mid closer to left by decreasing right
//         right = mid-1;
//     } else if (target >nums[mid]){
//         left = mid+1;
//     }else{
//         //return index of where target would be
//     }
//     //if not there return index where target would be

    
// };