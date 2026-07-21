/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let track = 0;
    let count = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "L"){
            track++;
        }else{
            track--;
        }

        if(track === 0){
           count++;
        }
    }

    return count;
};