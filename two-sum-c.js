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
    
}

console.log(twoSum([3,2,4], 6))//[1,2]
console.log("what")