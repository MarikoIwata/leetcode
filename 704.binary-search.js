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
    let left = 0;
    let right = nums.length-1//last element in array
    console.log("right:",right)
   
    while (left <= right){
    let pivot = Math.floor((left+right)/2) //0
    console.log("pivot",pivot)
    //if nums [pivot] is strictly equal to the target then return pivot
    if(nums[pivot] === target){//nums[3]=5
        return pivot;
    } else if(target<nums[pivot]){//2<5
    //if target is less than nums[pivot] make right = pivot -1
        right = pivot-1;//right = 2, 
      
    }else(target>nums[pivot]){
        left = pivot+1;
      
    //if target is more than nums[pivot] make left = pivot +1
    } 
    }  
 return left //or right
};
// @lc code=end


//FOR LOOP NOT BINARY SEARCH
// var search = function(nums, target) {
//     //iterate over array with for loop
//     for (let i = 0; i<=nums.length; i++){
//         if(i >= nums.length) return -1;
//         if(nums[i] === target){
//             return i
//         }
//     } 
//     //if the element is strictly equal to the target then return the index
    
// };

//had issue with middle being the length of the array divided by two. If I did left +right divided by 2 it was dynamic

//issue with one element array, added return -1 to outside the while loop

var search = function(nums, target, index = 0) {
    if (nums[index] === target) return index;
    if (nums[index] !== target && nums[index +1] === undefined) return -1; 
    return search(nums, target, ++index)
};