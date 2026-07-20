/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let x = s.length - 1;

    for(let i = x; i >= 0; i--){
        if(s[i] !== " "){
            count++;
        }else if(count > 0){
            return count;
        }
    }
    return count;
};