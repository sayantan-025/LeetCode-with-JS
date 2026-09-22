/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0; 
    let j = numbers.length - 1;

    while(i < j){
        let currSum = numbers[i] + numbers[j];
        if(currSum > target){
            j--;
        }else if(currSum < target){
            i++;
        }else{
            return [i + 1, j + 1];
        }
    }
};