/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // console.log("x",x)
    //negative numbers are not palindromes
    if (Number(x)<0) return false;
    //base case: if the number is 1 char or no char return true
    if(String(x).length === 1) return true;
    //get last char in string
    let last = String(x)[String(x).length-1];
    //if there is on last char then return true
    if (last === undefined) return true;
    // console.log('last: ', last)
    // console.log("string length: ",String(x).length-1 )
    //get first digit by converting to string
    let first = String(x)[0];
    // console.log('first: ', first)
    //check if it's the same as the first char
    if(last !== first) return false;
    //recursive case: take off first and last
    return isPalindrome(String(x).slice(1,String(x).length-1))    
};

// let num = 123
// let string = "pass"
// console.log("test",string[string.length-1])
// console.log(num%10)
// console.log(String(num)[0])

// console.log(isPalindrome(-121))//false
// console.log(isPalindrome(121))//true 
// console.log(isPalindrome(12321))//true
// console.log(isPalindrome(12341))//false
// console.log(isPalindrome(1000021))//false
// console.log(isPalindrome(11))//true
// console.log(isPalindrome(12))//true

// @lc code=end

