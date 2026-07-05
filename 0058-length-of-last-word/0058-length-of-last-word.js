/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let pointer = s.length - 1;
    let count = 0;

    for(let i = pointer; i >= 0; i--){
        if(s[i] !== " "){
            count++;
        }else if(count > 0){
            return count;
        }
    }
    return count;
};