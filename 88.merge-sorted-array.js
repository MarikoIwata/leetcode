/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //if m is 0 then return nums2
    if(m === 0) return nums2;
    //if n is 0 then return nums1
    if(n === 0) return nums1;
    //filter out any zeroes out of nums1 and nums2
    nums1 = nums1.filter(el => el !== 0) 
    console.log("nums1 after filter",nums1)
    //declare "i" as first element of nums1
    //declare "j" as first element of nums2
    //iterate over nums2 elements while j is not greater than the length of nums2
        //if nums2's element at j is less than num 1's element at index i, then splice array (start, 0, element to insert) and num2 at element j before num1 at index i

        //if nums2's j element is greater than num 1's element at index i but not at element at index i+1, then splice array and insert j after i
        //if nums2's j element is both greater than num1's element  at i && at i+1 then keep checking with the next one until the length of nums1's array
        //increase j by 1
    //return nums1

    
};
// @lc code=end

var merge = function(nums1, m, nums2, n) {
    //if m is 0 then return nums2
    if(m === 0) return nums2;
    //if n is 0 then return nums1
    if(n === 0) return nums1;
    //filter out any zeroes out of nums1 and nums2
    nums1 = nums1.filter(el => el !== 0) 
    nums2 = nums2.filter(el => el !== 0) 
    // console.log("nums1 after filter",nums1)
    //declare "i" as first element of nums1
    let i = 0;
    //iterate over nums2 elements while j is not greater than the length of nums2
    for(let j = 0; j<nums2.length; j++){
        //if nums2's element at j is less than num 1's element at index i, then splice array (start, 0, element to insert) and num2 at element j before num1 at index i
        if((nums2[j] < nums1[i]) && (nums2[j] < nums1[i+1])){
            nums1.splice(i,0,nums2[j]);//then add before nums1[1]
            i++;
            console.log('first if:', nums1)
        }
        // if nums2's j element is greater than num 1's element at index i but not at element at index i+1, then splice array and insert j after i
        if((nums2[j] > nums1[i]) && (nums2[j] <= nums1[i+1])){
            nums1.splice(i+1,0,nums2[j]);//then add in between the two numbers 
            i += 2;//skip over the index you just inserted
            console.log('second if:', nums1)
        }    
        // if nums2's j element is both greater than num1's element  at i && at i+1 then keep checking with the next one until the length of nums1's array
        if((nums2[j] > nums1[i]) && (nums2[j] > nums1[i+1])){ //if greater than both
            //iterate through rest of i and compare
            for(let next = i+2; i<nums1.length; i++){
                if(nums2[j]<= next){
                    nums1.splice(next, 0, nums2[j])
                    break;
                } else{
                    nums1.push(nums2[j])
                    break;
                }
            }
            console.log('third if:', nums1)
            i++;
            }
        } 
        return nums1
    };

console.log(merge ([1,2,3,0,0,0],3,[2,5,6],3))