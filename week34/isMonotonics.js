/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    
    return nums.every((num,i)=> i===0 || num <=nums[i-1])
            || nums.every((num,i)=> i===0 || num >= nums[i-1])
};