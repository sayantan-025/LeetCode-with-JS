/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let ans = new Array(nums.length);

    let prefix = 1;
    for(let i = 0; i < nums.length; i++){
        ans[i] = prefix;
        prefix *= nums[i];
    }

    let sufix = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        ans[i] *= sufix;
        sufix *= nums[i];
    }
    return ans;
};