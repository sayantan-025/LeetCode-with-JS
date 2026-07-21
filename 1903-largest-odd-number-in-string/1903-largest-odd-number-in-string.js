/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let x = num.length - 1;

    for(let i = x; i >= 0; i--){
        if(num[i] % 2 === 1){
            return num.substring(0 , i+1);
        }
    }
    return  "";
};