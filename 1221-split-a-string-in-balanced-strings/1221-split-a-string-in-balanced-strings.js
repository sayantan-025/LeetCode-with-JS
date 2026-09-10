/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let max_count = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "R"){
           max_count++;
        }else{
            max_count--;
        }

        if(max_count === 0){
            count++;
        }
    }
    return count;
};