/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */    
var twoSum = function(nums, target) {
    const result = [];
    for (let i = 0; i<nums.length-1; i++){
        for (let j = 1; i<nums.length; j++){
            console.log(i,j)
            if(nums[i]+nums[j] === target){
                result.push(i, j)
                return result
            }
        }
    }
    
};

console.log(twoSum([1,2,3], 3))//[1,2]
// @lc code=end

