/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //declare const max sub array and assign it to the first element
    const max = [nums[0]]; //[-2]
    //declare the sum of the maxSubArray using reduce
    let sum = nums[0]; //-2
    //iterate and compare over elements
    for(let i = 1; i<nums.length; i++){
    //if the 2nd/next element larger than the sum of the maxSubArray then assign it as the max
    //else if the 2nd/next element plus the max sub array sum is higher then assign the 2nd/next element plus the maxSubArray to be the m
    if(nums[i] > sum){//if 1>-2
        max = [nums[i]];
        sum = nums[i];
        console.log("max: ", max)
        console.log("sum: ", sum)
    } else if (sum + nums[i] > nums[i]){
        max = max.push(nums[i]);
        sum = sum+nums[i];
    }
}
 return sum;
};
// @lc code=end

