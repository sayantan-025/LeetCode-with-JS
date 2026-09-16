/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {};

    for(let i = 0; i < nums.length; i++){
        if(freq[nums[i]]){
            freq[nums[i]]++;
        }else{
            freq[nums[i]] = 1;
        }
    }

    let buckets = new Array(nums.length + 1);

    for(let i = 0; i < buckets.length; i++){
        buckets[i] = [];
    }
    
    let keys = Object.keys(freq);

    for(let i = 0; i < keys.length; i++){
        let num = Number(keys[i]);
        let count = freq[keys[i]];

        buckets[count].push(num);
    }

    let result = [];

    for(let i = buckets.length - 1; i >= 0; i--){
        for(let j = 0; j < buckets[i].length; j++){
            result.push(buckets[i][j]);
        }
        if(result.length === k){
            return result;
        }
    }
    return result;
};